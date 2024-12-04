using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Entities;

namespace TaskManager.Data.Access.DataAccess.EntityFramework
{
    public class EfEntityRepositoryBase<TEntity> : IEntityRepository<TEntity>
          where TEntity : class, IEntity, new()
    {
        private readonly TaskManagerContext _context;

        public EfEntityRepositoryBase(TaskManagerContext context)
        {
            _context = context;
        }
        public void Add(TEntity entity)
        {
            var addedEntity = _context.Add(entity);
            addedEntity.State = EntityState.Added;
        }

        public bool Complate()
        {
            var transaction = _context.Database.BeginTransaction();
            try
            {
                bool isSuccess = _context.SaveChanges() > 0;

                if (isSuccess)
                {
                    transaction.Commit();
                }
                else
                {
                    transaction.Rollback();
                }
                return isSuccess;
            }
            catch (Exception ex)
            {
                transaction.Rollback();
                Console.WriteLine($"Error: {ex.Message}");
                return false;
            }
        }

        public void Delete(TEntity entity)
        {
            var deletedEntity = _context.Entry(entity);
            deletedEntity.State = EntityState.Deleted;
        }
        public TEntity Get(Expression<Func<TEntity, bool>> filter, params Expression<Func<TEntity, object>>[] includes)
        {
            IQueryable<TEntity> query = _context.Set<TEntity>().Where(filter);

            if (includes != null)
                query = includes.Aggregate(query, (current, include) => current.Include(include));

            return query.SingleOrDefault();
        }

        public List<TEntity> GetList(Expression<Func<TEntity, bool>> filter = null, params Expression<Func<TEntity, object>>[] include)
        {
            IQueryable<TEntity> query = filter == null
                    ? _context.Set<TEntity>()
                    : _context.Set<TEntity>().Where(filter);

            if (include != null)
                query = include.Aggregate(query, (current, include) => current.Include(include));

            return query.ToList();
        }

        public IQueryable<TEntity> GetQueryable(Expression<Func<TEntity, bool>> filter = null)
        {
            IQueryable<TEntity> query = filter == null
                ? _context.Set<TEntity>()
                : _context.Set<TEntity>().Where(filter);
            return query;
        }


        public void Update(TEntity entity)
        {

            var updatedEntity = _context.Entry(entity);
            updatedEntity.State = EntityState.Modified;

        }
    }
}

