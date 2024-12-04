export type Task = {
    id : number;
    title: string;
    description?: string; 
    date: string;
  };


 export type EditTaskProps = {
    task: Task; 
    onUpdate: (updatedTask: Task) => void; 
  };


 export type TaskListProps = {
    tasks: Task[]; 
  }