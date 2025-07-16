"use client";

import { ITaskHeaderProps } from "./taskHeader.interface";
import {
  SCButtonAddTask,
  SCFormAddTask,
  SCHeaderContainer,
  SCInputAddTask,
  SCNumberStats,
  SCStatsContainer,
  SCTitle,
  SCTitleAddTask,
  SCTitleStats,
  SCWrapperAddTask,
  SCWrapperStatsNumbersTasks,
} from "./taskHeader.styles";
import { useTaskHeader } from "./usetaskHeader";

export const TaskHeader = ({
  onAddTask,
  loading,
  totalTasks = 0,
  pendingTasks = 0,
}: ITaskHeaderProps) => {
  const { newTaskText, setNewTaskText, isSubmitting, handleSubmit } =
    useTaskHeader(onAddTask);

  return (
    <SCHeaderContainer>
      <SCTitle>Lista de Tareas</SCTitle>
      <SCStatsContainer>
        <SCWrapperStatsNumbersTasks>
          <SCTitleStats>N° Tareas</SCTitleStats>
          <SCNumberStats>{totalTasks}</SCNumberStats>
        </SCWrapperStatsNumbersTasks>

        <SCWrapperStatsNumbersTasks>
          <SCTitleStats>Pendientes</SCTitleStats>
          <SCNumberStats>{pendingTasks}</SCNumberStats>
        </SCWrapperStatsNumbersTasks>
      </SCStatsContainer>

      <SCWrapperAddTask>
        <SCTitleAddTask>Agregar Tarea</SCTitleAddTask>

        <SCFormAddTask onSubmit={handleSubmit}>
          <SCInputAddTask
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Revisar el flujo de usuario X."
            onFocus={(e) => {
              e.target.style.borderColor = "#3B82F6";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#D1D5DB";
            }}
            disabled={isSubmitting || loading}
          />
          <SCButtonAddTask
            type="submit"
            $disabled={!newTaskText.trim() || isSubmitting || loading}
            onMouseEnter={(e) => {
              if (newTaskText.trim() && !isSubmitting && !loading) {
                e.currentTarget.style.backgroundColor = "#2563EB";
              }
            }}
            onMouseLeave={(e) => {
              if (newTaskText.trim() && !isSubmitting && !loading) {
                e.currentTarget.style.backgroundColor = "#3B82F6";
              }
            }}
          >
            {isSubmitting ? "Agregando..." : "Agregar"}
          </SCButtonAddTask>
        </SCFormAddTask>
      </SCWrapperAddTask>
    </SCHeaderContainer>
  );
};
