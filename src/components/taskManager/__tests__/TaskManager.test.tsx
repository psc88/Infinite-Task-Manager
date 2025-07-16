import { render, screen, fireEvent } from "@testing-library/react";
import { TaskManager } from "../TaskManager";
import { useTaskManager } from "../useTaskManager";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("../useTaskManager");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseTaskManager = useTaskManager as any;

describe("TaskManager", () => {
  const mockTasks = [
    {
      id: "1",
      text: "Complete documentation",
      completed: false,
    },
    {
      id: "2",
      text: "Review code",
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
    mockUseTaskManager.mockReturnValue({
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

  test("calls toggleTask when the checkbox is clicked", () => {
    render(<TaskManager />);

    const checkbox = screen.getByTestId("checkbox-1");
    
    fireEvent.click(checkbox);
    
    expect(mockHandlers.toggleTask).toHaveBeenCalledWith("1");
  });

  test("renders the tasks correctly", () => {
    render(<TaskManager />);

    expect(screen.getByText("Complete documentation")).toBeInTheDocument();
    expect(screen.getByText("Review code")).toBeInTheDocument();
  });
});
