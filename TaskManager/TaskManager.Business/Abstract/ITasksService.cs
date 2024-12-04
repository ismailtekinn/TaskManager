using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Business.Abstract
{
    public interface ITasksService
    {
        Task<List<Task>> GetAllTasksAsync();

        Task<Task> GetTaskByIdAsync(int taskId);

        Task<bool> AddTaskAsync(Task task);

        Task<bool> UpdateTaskAsync(Task task);

        Task<bool> DeleteTaskAsync(int taskId);
    }
}
