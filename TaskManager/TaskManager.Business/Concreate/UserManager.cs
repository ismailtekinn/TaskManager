using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Business.Abstract;
using TaskManager.Business.Utils.Response;
using TaskManager.Business.Utils.Token;
using TaskManager.Data.Access.Abstract;
using TaskManager.Entities.Concreate;
using TaskManager.Entities.DTO;

namespace TaskManager.Business.Concreate
{
    public class UserManager : IUserService
    {
        private readonly IUserDal _userDal;
        private readonly IJwtTokenGenerator _jwtTokenGenerator;
        public UserManager(IUserDal userDal, IJwtTokenGenerator jwtTokenGenerator)
        {
            _userDal = userDal;
            _jwtTokenGenerator = jwtTokenGenerator;
        }
        public Response<LoginResponseDto> Login(LoginDto model)
        {
            var user = _userDal.Get(u => u.Email == model.UsernameOrEmail || u.Username == model.UsernameOrEmail);

            if (user == null)
            {
                return new Response<LoginResponseDto>(false, "Kullanıcı bulunamadı.");
            }

            //if (user.PasswordHash != model.Password)
            //{
            //    return new Response<LoginResponseDto>(false, "Şifre hatalı.");
            //}
            string  token = _jwtTokenGenerator.GenerateToken(user); 
            var loginResponse = new LoginResponseDto
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Token = token
            };

            return new Response<LoginResponseDto>(true, "Giriş başarılı.", loginResponse);
        }

        public Response<bool> Register(RegisterDto registerModel)
        {
            var existingUser = _userDal.Get(u => u.Email == registerModel.Email || u.Username == registerModel.Username);
            if (existingUser != null)
            {
                return new Response<bool>(false, "Bu email veya kullanıcı adı zaten kayıtlı.");
            }

            var newUser = new User
            {
                Name = registerModel.Name,
                Surname = registerModel.Surname,
                Username = registerModel.Username,
                Email = registerModel.Email,
                PasswordHash = registerModel.Password,
                CreatedAt = DateTime.UtcNow
            };

            _userDal.Add(newUser);
            bool isSuccess = _userDal.Complate();
            if (!isSuccess)
            {
                return new Response<bool>(false, "Kayıt işlemi sırasında bir hata oluştu");
            }

            return new Response<bool>(true, "Kayıt işlemi başarılı.", true);
        }

    }
}
