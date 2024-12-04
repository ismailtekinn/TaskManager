import React, { useEffect, useState } from 'react';
import { TaskListProps } from '../../types/taskType';
import { useNavigate } from 'react-router-dom';
import { getTaskList } from '../../api/task/taskProcces';

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const navigate = useNavigate();
    const [taskss, setTaskss] = useState<TaskListProps['tasks']>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const userId = 1; // giriş yapan kullanıcının id'si alınacak.

    // Arayüzü görüntüleyebilmek için loading state'ini false duruma alın ve useEffecti yorum satırı yapın.

    useEffect(() => {
      const loadTasks = async () => {
        setLoading(true);
        try {
          const data = await getTaskList(userId); 
          setTaskss(data);
        } catch (err) {
          setError('Görevler yüklenirken bir hata oluştu.');
        } finally {
          setLoading(false);
        }
      };
  
      loadTasks();
    }, [userId]); 

    const handleEdit = (taskId: number) => {
        navigate(`/edit/:${taskId}`);
      };
 return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Görev Listesi</h2>
      {loading ? (
        <div className="text-center">Yükleniyor...</div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : tasks.length === 0 ? (
        <div className="alert alert-info text-center">Henüz bir görev yok!</div>
      ) : (
        <div className="list-group">
          {tasks.map((task) => (
            <div key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{task.title}</h5>
                {task.description && <p className="mb-1">{task.description}</p>}
                <small className="text-muted">Oluşturulma Tarihi: {task.date}</small>
              </div>
              <button className="btn btn-primary" onClick={() => handleEdit(task.id)}>
                Düzenle
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  };
  
  export default TaskList;