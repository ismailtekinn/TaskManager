using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Entities;

namespace TaskManager.Data.Access.DataAccess
{
    public interface IEntityRepository<T> where T : class, IEntity, new()
    {
        T Get(Expression<Func<T, bool>> filter, params Expression<Func<T, object>>[] includes);

        List<T> GetList(Expression<Func<T, bool>> filter = null, params Expression<Func<T, object>>[] include);

        IQueryable<T> GetQueryable(Expression<Func<T, bool>> filter = null);

        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
        bool Complate();
    }
}
