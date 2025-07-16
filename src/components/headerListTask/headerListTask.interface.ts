export interface IHeaderListTaskProps {
  onAddTask: (text: string) => Promise<void>;
  loading: boolean;
  totalTasks?: number;
  pendingTasks?: number;
}
