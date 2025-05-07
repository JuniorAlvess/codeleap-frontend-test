import styled from 'styled-components';
import colors from '../../styles/colors';

const StyledInputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const StyledInputLabel = styled.label`
  color: ${colors.textColor};
  font: var(--font-medium);
`;

const StyledTextInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${colors.grey};
  padding: 8px 0 8px 11px;
  color: ${colors.textColor};
  font: var(--font-small);
  outline: none;

  &::placeholder {
    color: ${colors.opaqueColor};
  }

  &:invalid:required {
    background-color: ${colors.error};
  }
`;

export { StyledInputGroupWrapper, StyledInputLabel, StyledTextInput };
