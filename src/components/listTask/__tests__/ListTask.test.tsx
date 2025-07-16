import { render, screen, fireEvent } from "@testing-library/react";
import { ListTask } from "../ListTask";
import { useListTask } from "../useListTask";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("../useListTask");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseListTask = useListTask as any;

describe("ListTask", () => {
  const mockTasks = [
    {
      id: "1",
      text: "Completar documentación",
      completed: false,
    },
    {
      id: "2",
      text: "Revisar código",
      completed: true,
    },
  ];

  const mockHandlers = {
    addTask: vi.fn(),
    toggleTask: vi.fn(),
    handleEdit: vi.fn(),
    handleSaveEdit: vi.fn(),
    handleCancelEdit: vi.fn(),
    setEditText: vi.fn(),
  };

  beforeEach(() => {
    mockUseListTask.mockReturnValue({
      tasks: mockTasks,
      loading: false,
      initialLoading: false,
      error: null,
      hasNextPage: true,
      canEdit: null,
      editText: "",
      containerRef: { current: null },
      handlers: mockHandlers,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("llama a toggleTask cuando se hace click en el checkbox", () => {
    render(<ListTask />);

    const checkbox = screen.getByTestId("checkbox-1");
    
    fireEvent.click(checkbox);
    
    expect(mockHandlers.toggleTask).toHaveBeenCalledWith("1");
  });

  test("renderiza las tareas correctamente", () => {
    render(<ListTask />);

    expect(screen.getByText("Completar documentación")).toBeInTheDocument();
    expect(screen.getByText("Revisar código")).toBeInTheDocument();
  });
});
