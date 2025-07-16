"use client";

import { useState } from "react";

interface HeaderListTaskProps {
  onAddTask: (text: string) => Promise<void>;
  loading: boolean;
  totalTasks?: number;
  pendingTasks?: number;
}

export const HeaderListTask = ({ 
  onAddTask, 
  loading, 
  totalTasks = 0, 
  pendingTasks = 0 
}: HeaderListTaskProps) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onAddTask(newTaskText);
      setNewTaskText("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        backgroundColor: "white",
        borderBottom: "1px solid #E5E7EB",
        gap: "8px",
        height: "200px",
      }}
    >
      {/* Título principal */}
      <h1 style={{ 
        margin: 0, 
        fontSize: "2rem", 
        fontWeight: "bold",
        color: "#111827",
        textAlign: "center"
      }}>
        Lista de Tareas
      </h1>
      
      {/* Estadísticas */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "400px",
        margin: "0 auto",
        width: "100%"
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem"
        }}>
          <span style={{
            fontSize: "0.875rem",
            color: "#6B7280"
          }}>
            N° Tareas
          </span>
          <span style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#F59E0B"
          }}>
            {totalTasks}
          </span>
        </div>
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.25rem"
        }}>
          <span style={{
            fontSize: "0.875rem",
            color: "#6B7280"
          }}>
            Pendientes
          </span>
          <span style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#F59E0B"
          }}>
            {pendingTasks}
          </span>
        </div>
      </div>
      
      {/* Sección Agregar Tarea */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem"
      }}>
        <h3 style={{
          margin: 0,
          fontSize: "1.125rem",
          fontWeight: "600",
          color: "#374151"
        }}>
          Agregar Tarea
        </h3>
        
        <form onSubmit={handleSubmit} style={{ 
          display: "flex", 
          gap: "0.75rem",
          alignItems: "center"
        }}>
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="¿Que hay que hacer?"
            style={{
              flex: 1,
              padding: "0.75rem 1rem",
              border: "1px solid #D1D5DB",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#3B82F6";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#D1D5DB";
            }}
            disabled={isSubmitting || loading}
          />
          <button
            type="submit"
            disabled={!newTaskText.trim() || isSubmitting || loading}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "background-color 0.2s",
              opacity: (!newTaskText.trim() || isSubmitting || loading) ? 0.5 : 1,
            }}
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
          </button>
        </form>
      </div>
    </div>
  );
};
