import styled from "styled-components";

export const SCErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: #f9fafb;
`;
export const SCCardError = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(24, 23, 23, 0.04);
  overflow: hidden;
  padding: 0 16px;
`;
export const SCErrorContent = styled.div`
  color: #dc2626;
  text-align: center;
  padding: 32px;
`;
export const SCButtonError = styled.button`
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;