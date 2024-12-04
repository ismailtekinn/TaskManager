using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Data.Access.DataAccess;
using TaskManager.Entities.Concreate;

namespace TaskManager.Data.Access.Abstract
{
    public interface IUserDal : IEntityRepository<User>
    {
    }
}
