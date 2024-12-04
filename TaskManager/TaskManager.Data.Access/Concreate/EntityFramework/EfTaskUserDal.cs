using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Data.Access.Abstract;
using TaskManager.Data.Access.DataAccess;
using TaskManager.Data.Access.DataAccess.EntityFramework;
using TaskManager.Entities.Concreate;

namespace TaskManager.Data.Access.Concreate.EntityFramework
{
    public class EfTaskUserDal: EfEntityRepositoryBase<TaskUser>, ITaskUserDal
    {
        public EfTaskUserDal(TaskManagerContext context) : base(context)
        {
        }
    }
}
