import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const StyledButton = styled.button`
  width: fit-content;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  font: var(--font-medium);

  padding: 7px 30px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: filter 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    filter: opacity(70%);
    cursor: not-allowed;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 1s linear infinite;
  font-size: 18px;
`;

export { StyledButton, LoadingIcon };
