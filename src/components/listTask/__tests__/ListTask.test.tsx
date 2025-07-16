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

  test("calls toggleTask when the checkbox is clicked", () => {
    render(<ListTask />);

    const checkbox = screen.getByTestId("checkbox-1");
    
    fireEvent.click(checkbox);
    
    expect(mockHandlers.toggleTask).toHaveBeenCalledWith("1");
  });

  test("renders the tasks correctly", () => {
    render(<ListTask />);

    expect(screen.getByText("Complete documentation")).toBeInTheDocument();
    expect(screen.getByText("Review code")).toBeInTheDocument();
  });
});
