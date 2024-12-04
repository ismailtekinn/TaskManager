import { API_URL } from "../../constants/constanst";
import { Task } from "../../types/taskType";

export async function createTask(task: Task, userId: number) {
  try {
    const url = API_URL + "Task/CreateTask";
    const tasks = { ...task, userId };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tasks),
    });
    if (!response.ok) {
      throw new Error(`HTTP Hatası! Durum: ${response.status}`);
    }
     const data = await response.json();
    return data;
  } catch (error) {
    console.error("Görev oluşturulurken bir hata oluştu:", error);
    throw error;
  }
}

export async function getTaskList(userId: number) {
  try {
    const url = `${API_URL}Task/GetTask?userId=${userId}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP Hatası! Durum: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Görevler alınırken bir hata oluştu:", error);
    throw error;
  }
}





export const editTask = async (task:Task) => {
  try {
    const response = await fetch(`/api/tasks/${task.id}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body :JSON.stringify({
        ...task
    })
    });

    if (!response.ok) {
      throw new Error('Görev güncellenirken bir hata oluştu.');
    }

    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    throw new Error('Görev güncellenemedi. Lütfen tekrar deneyin.');
  }
};