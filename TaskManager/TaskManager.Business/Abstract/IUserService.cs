using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Business.Utils.Response;
using TaskManager.Entities.DTO;

namespace TaskManager.Business.Abstract
{
    public interface IUserService
    {
        Response<LoginResponseDto> Login(LoginDto model);
        Response<bool> Register(RegisterDto registerModel);
    }
}
