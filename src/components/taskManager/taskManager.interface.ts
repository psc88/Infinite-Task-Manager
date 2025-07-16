import { RefObject } from "react";

export interface ITask {
  id: string;
  text: string;
  completed: boolean;
}

export interface IUseTaskManagerReturn {
  tasks: ITask[];
  loading: boolean;
  initialLoading: boolean;
  error: string | null;
  hasNextPage: boolean;
  canEdit: string | null;
  editText: string;
  containerRef: RefObject<HTMLDivElement | null>;
  totalTasks: number;
  pendingTasks: number;
  fetchTasks: () => Promise<void>;
  handlers: {
    addTask: (value: string) => Promise<void>;
    toggleTask: (id: string) => void;
    editTask: (id: string, newValue: string) => void;
    loadMore: () => void;
    handleEdit: (data: ITask) => void;
    handleSaveEdit: () => void;
    handleCancelEdit: () => void;
    setEditText: (value: string) => void;
  };
}
