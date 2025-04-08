export interface TaskData {
  title: string;
  description: string;
  dueDate: string;
}

export interface Task extends TaskData {
  id: string;
  userId: string;
}
