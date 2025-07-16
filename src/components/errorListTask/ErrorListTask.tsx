import React from "react";

export const ErrorListTask = ({ error }: { error: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "32px",
        backgroundColor: "#F9FAFB",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          overflow: "hidden",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            color: "#DC2626",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <h3>Error al cargar las tareas</h3>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: "8px 16px",
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Reintentar
          </button>
        </div>
      </div>
    </div>
  );
};
