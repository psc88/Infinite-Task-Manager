export interface TaskErrorProps {
  error: string;
  onRetry: () => Promise<void>;
}
