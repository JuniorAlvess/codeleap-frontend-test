import styled from 'styled-components';
import colors from '../../styles/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  color: ${colors.textColor};
  font: var(--font-medium);
`;

const TextareaInput = styled.textarea`
  border-radius: 8px;
  border: 1px solid ${colors.grey};
  padding: 8px 0 8px 11px;
  color: ${colors.textColor};
  font: var(--font-small);
  outline: none;
  resize: vertical;

  &::placeholder {
    color: ${colors.opaqueColor};
  }
`;

export { Container, InputLabel, TextareaInput };
