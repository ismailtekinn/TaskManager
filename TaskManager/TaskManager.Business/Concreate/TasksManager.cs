using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Business.Abstract;

namespace TaskManager.Business.Concreate
{
    public class TasksManager : ITasksService
    {
        public Task<bool> AddTaskAsync(Task task)
        {
            throw new NotImplementedException();
        }

        public Task<bool> DeleteTaskAsync(int taskId)
        {
            throw new NotImplementedException();
        }

        public Task<List<Task>> GetAllTasksAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Task> GetTaskByIdAsync(int taskId)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdateTaskAsync(Task task)
        {
            throw new NotImplementedException();
        }
    }
}
