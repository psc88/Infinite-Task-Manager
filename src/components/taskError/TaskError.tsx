import {
  SCButtonError,
  SCCardError,
  SCErrorContainer,
  SCErrorContent,
} from "./taskError.styles";
import { TaskErrorProps } from "./taskError.interface";

export const TaskError = ({ error, onRetry }: TaskErrorProps) => {
  return (
    <SCErrorContainer>
      <SCCardError>
        <SCErrorContent>
          <h3>Error al cargar las tareas</h3>
          <p>{error}</p>
          <SCButtonError onClick={onRetry}>
            Reintentar
          </SCButtonError>
        </SCErrorContent>
      </SCCardError>
    </SCErrorContainer>
  );
};
