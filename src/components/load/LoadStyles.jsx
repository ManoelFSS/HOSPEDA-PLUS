import styled, { keyframes } from 'styled-components';

// Animação de aparecimento e desaparecimento (fade-in e fade-out)
const fade = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

// Container para alinhar as bolinhas em linha
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Espaçamento entre as bolinhas */
  width: 100%;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Estilos das bolinhas com a animação de fade-in/fade-out
export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  animation: ${fade} 1.4s linear infinite;
  animation-delay: ${({ delay }) => delay};
`;
