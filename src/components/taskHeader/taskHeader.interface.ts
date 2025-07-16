export interface ITaskHeaderProps {
  onAddTask: (text: string) => Promise<void>;
  loading: boolean;
  totalTasks?: number;
  pendingTasks?: number;
}
