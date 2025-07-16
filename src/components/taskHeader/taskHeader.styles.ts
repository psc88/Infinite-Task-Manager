import { styled } from "styled-components";

export const SCHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  gap: 12px;
  height: 200px;
  align-items: center;
`;
export const SCTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #111827;
  text-align: center;
  margin: 0;
`;
export const SCStatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 100%;
`;
export const SCWrapperStatsNumbersTasks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
export const SCTitleStats = styled.span`
  font-size: 12px;
  color: #6b7280;
`;
export const SCNumberStats = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #f59e0b;
`;
export const SCWrapperAddTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
export const SCTitleAddTask = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 0;
`;
export const SCFormAddTask = styled.form`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const SCInputAddTask = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;
`;
export const SCButtonAddTask = styled.button<{ $disabled: boolean }>`
  padding: 12px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
`;
