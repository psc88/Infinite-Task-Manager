import styled, { css } from "styled-components";

export const SCRowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 16px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const SCMessageFooter = styled.div`
  text-align: center;
  padding: 1rem;
  color: #6b7280;
`;

export const SCListTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  height: calc(100vh - 302px);
`;

export const SCCardListTask = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(24, 23, 23, 0.04);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 32px);
`;

export const SCListTaskContent = styled.div<{ $isEmpty: boolean }>`
  ${({ $isEmpty }) =>
    $isEmpty &&
    css`
      overflow: hidden;
      justify-content: center;
    `}
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 16px;
`;

export const SCEmptyListTask = styled.div`
  text-align: center;
  color: #6b7280;
`;

export const SCItemListTask = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

export const SCCircleCheckbox = styled.div<{ $checked: boolean }>`
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid #10b981;
  border-radius: 50%;
  background-color: ${({ $checked }) => ($checked ? "#10B981" : "white")};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
  }
  ${({ $checked }) =>
    $checked &&
    css`
      &::after {
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        border: 2px solid white;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        top: 4px;
        left: 9px;
      }
    `}
`;

export const SCEditButton = styled.button`
  padding: 0.5rem;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2563EB;
    transform: scale(1.05);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const SCSpanTask = styled.span<{ $completed: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 500px;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  color: ${({ $completed }) => ($completed ? "#6B7280" : "#111827")};
  font-size: 16px;
  font-weight: ${({ $completed }) => ($completed ? "400" : "500")};
`;

export const SCCanEditContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 8px;
`;

export const SCInputEdit = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const SCButton = styled.button<{ $isEdit?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ $isEdit }) => ($isEdit ? "#10b981" : "#6b7280")};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

export const SCCircleWithTask = styled.div<{ $isEdit?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  ${({ $isEdit }) =>
    !$isEdit &&
    css`
      flex: 1;
    `}
`;
