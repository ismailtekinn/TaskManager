import React, { useState, useEffect } from 'react';
import { EditTaskProps } from '../../types/taskType';
import { editTask } from '../../api/task/taskProcces';

const EditTask: React.FC<EditTaskProps> = ({ task, onUpdate }) => {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(task.description || '');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Başlık boş olamaz!');
      setSuccessMessage(null);
      return;
    }

    try {
      const updatedTask = await editTask({ ...task, title, description });
      setSuccessMessage('Görev başarıyla güncellendi!');
      setError(null);
      onUpdate(updatedTask);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Görev güncellenemedi. Lütfen tekrar deneyin.');
      setSuccessMessage(null);
    }
  };

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description || '');
  }, [task]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Görev Düzenle</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label htmlFor="editTaskTitle" className="form-label">
            Başlık
          </label>
          <input
            type="text"
            className="form-control"
            id="editTaskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="editTaskDescription" className="form-label">
            Açıklama
          </label>
          <textarea
            className="form-control"
            id="editTaskDescription"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Güncelle
        </button>
      </form>
    </div>
  );
};

export default EditTask;
