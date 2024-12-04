import React, { useState } from "react";
import { Task } from "../../types/taskType";
import { createTask } from "../../api/task/taskProcces";


const CreateTask: React.FC = () => {
  const userId = 1;
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Yeni görev objesini oluştur
    const newTask: Task = {
      id:0,
      title,
      description,
      date: new Date().toISOString(),
    };

    try {
      const createdTask = await createTask(newTask, userId); // Görev oluşturma API çağrısı
      console.log("Oluşturulan görev:", createdTask);
      setSuccessMessage("Görev başarıyla oluşturuldu!");
      setTitle("");
      setDescription("");
      setError(null);
    } catch (err) {
      console.error("Görev oluşturulurken bir hata oluştu:", err);
      setError("Görev oluşturulamadı. Lütfen tekrar deneyin.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Yeni Görev Oluştur</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Başlık
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Açıklama
          </label>
          <textarea
            className="form-control"
            id="taskDescription"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Görev Oluştur
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
