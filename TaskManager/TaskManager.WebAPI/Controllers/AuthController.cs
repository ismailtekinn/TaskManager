using Microsoft.AspNetCore.Mvc;
using TaskManager.Business.Abstract;
using TaskManager.Entities.DTO;

namespace TaskManager.WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController: ControllerBase 
    {
        private readonly IUserService _userService;
        public AuthController(IUserService userService)
        {
            _userService = userService;

        }

        [HttpPost]
        [Route("Login")]
        public ActionResult Login(LoginDto model)
        {
            var response = _userService.Login(model);
            return Ok(response);

        }

        [HttpPost]
        [Route("Register")]
        public ActionResult Register(RegisterDto register)
        {
            var response = _userService.Register(register);
            return Ok(response);
        }
    }
}
