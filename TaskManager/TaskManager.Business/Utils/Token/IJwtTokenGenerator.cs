using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Entities.Concreate;

namespace TaskManager.Business.Utils.Token
{
    public interface IJwtTokenGenerator
    {
        string GenerateToken(User user);

        public interface IJwtTokenGenerator
        {
            string GenerateToken(User user);

        }
    }
}
