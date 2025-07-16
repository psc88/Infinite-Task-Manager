import mockApiService from "@/mockApi/mockApi";
import { useEffect, useState, useCallback, useRef } from "react";
import { ITask, IUseListTaskReturn } from "./listTask.interface";

export const useListTask = (): IUseListTaskReturn => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [canEdit, setCanEdit] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const containerRef = useRef<HTMLDivElement | null>(null);

  const fetchTasks = useCallback(async (page: number, append = false) => {
    setLoading(true);
    setError(null);

    try {
      const response = await mockApiService.fetchTasks({ page, limit: 10 });

      setTasks((prev: ITask[]) =>
        append ? [...prev, ...response.tasks as ITask[]] : response.tasks as ITask[]
      );
      setHasNextPage(response.hasNextPage);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
      if (!append) {
        setInitialLoading(false);
      }
    }
  }, []);

  const addTask = async (text: string) => {
    setLoading(true);
    setError(null);

    try {
      // TODO: COULD BE SAVED IN A LOCALSTORAGE OR BACKEND
      const newTask = await mockApiService.createTask(text);
      setTasks((prev: ITask[]) => [newTask as ITask, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear la tarea");
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id: string, newText: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const loadMore = useCallback(() => {
    if (!loading && hasNextPage) {
      fetchTasks(currentPage + 1, true);
    }
  }, [loading, hasNextPage, currentPage, fetchTasks]);

  const handleEdit = (task: ITask) => {
    setCanEdit(task.id);
    setEditText(task.text);
  };

  const handleSaveEdit = () => {
    if (canEdit && editText.trim()) {
      editTask(canEdit, editText.trim());
      setCanEdit(null);
      setEditText("");
    }
  };

  const handleCancelEdit = () => {
    setCanEdit(null);
    setEditText("");
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 100;

      if (isNearBottom && !loading && hasNextPage) {
        loadMore();
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading, hasNextPage, loadMore]);

  useEffect(() => {
    fetchTasks(1);
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    initialLoading,
    error,
    hasNextPage,
    canEdit,
    editText,
    containerRef,
    handlers: {
      addTask,
      toggleTask,
      editTask,
      loadMore,
      handleEdit,
      handleSaveEdit,
      handleCancelEdit,
      setEditText,
    },
  };
};
