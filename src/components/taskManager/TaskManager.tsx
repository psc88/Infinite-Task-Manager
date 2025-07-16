"use client";

import { TaskHeader } from "../taskHeader";
import {
  SCRowContainer,
  SCListTaskContainer,
  SCCardListTask,
  SCListTaskContent,
  SCEmptyListTask,
  SCItemListTask,
  SCCircleCheckbox,
  SCMessageFooter,
  SCSpanTask,
  SCCanEditContainer,
  SCInputEdit,
  SCButton,
  SCEditButton,
} from "./taskManager.styles";
import { useTaskManager } from "./useTaskManager";
import { EditIcon } from "../icons";
import { TaskError } from "../taskError";

export const TaskManager = () => {
  const {
    tasks,
    loading,
    initialLoading,
    error,
    hasNextPage,
    canEdit,
    editText,
    containerRef,
    handlers,
    totalTasks,
    pendingTasks,
    fetchTasks,
  } = useTaskManager();

  const {
    addTask,
    toggleTask,
    handleEdit,
    handleSaveEdit,
    handleCancelEdit,
    setEditText,
  } = handlers;

  // TODO: LIST VIRTUALIZATION COULD BE IMPLEMENTED
  return (
    <>
      <TaskHeader
        onAddTask={addTask}
        loading={loading}
        totalTasks={totalTasks}
        pendingTasks={pendingTasks}
      />
      {error ? (
        <TaskError error={error} onRetry={fetchTasks} />
      ) : (
        <SCListTaskContainer>
          <SCCardListTask>
            <SCListTaskContent ref={containerRef} $isEmpty={tasks.length === 0}>
              {tasks.length === 0 && !initialLoading && !error ? (
                <SCEmptyListTask>
                  <h3>No hay tareas</h3>
                  <p>¡Agrega tu primera tarea para comenzar!</p>
                </SCEmptyListTask>
              ) : (
                <>
                  {tasks.map((task, index) => (
                    <SCRowContainer key={`${task.id}-${index}-${task.text}`}>
                      <SCItemListTask>
                        <SCCircleCheckbox
                          $checked={task.completed}
                          onClick={() => toggleTask(task.id)}
                          data-testid={`checkbox-${task.id}`}
                        />
                        {/* TODO: IF IT IS CHECKED, CAN I EDIT? */}
                        {canEdit === task.id ? (
                          <SCCanEditContainer>
                            <SCInputEdit
                              type="text"
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleSaveEdit();
                                if (e.key === "Escape") handleCancelEdit();
                              }}
                              autoFocus
                            />
                            <SCButton $isEdit onClick={handleSaveEdit}>
                              Guardar
                            </SCButton>
                            <SCButton onClick={handleCancelEdit}>
                              Cancelar
                            </SCButton>
                          </SCCanEditContainer>
                        ) : (
                          <SCSpanTask $completed={task.completed}>
                            {task.text}
                          </SCSpanTask>
                        )}
                      </SCItemListTask>

                      {canEdit !== task.id && (
                        <SCEditButton onClick={() => handleEdit(task)}>
                          <EditIcon />
                        </SCEditButton>
                      )}
                    </SCRowContainer>
                  ))}

                  {loading && (
                    <SCMessageFooter>Cargando tareas...</SCMessageFooter>
                  )}

                  {!hasNextPage && tasks.length > 0 && !loading && (
                    <SCMessageFooter>
                      No hay más tareas para cargar
                    </SCMessageFooter>
                  )}
                </>
              )}
            </SCListTaskContent>
          </SCCardListTask>
        </SCListTaskContainer>
      )}
    </>
  );
};
