import styled from 'styled-components';
import colors from '../../styles/colors';

const StyledForm = styled.form`
  background: ${colors.primary};
  padding: 24px;
  border-radius: 16px;
  border: 1px solid ${colors.opaqueColor};

  width: calc(100% - 70px);

  margin: 0 auto;
  display: flex;
  flex-direction: column;

  button {
    align-self: end;
  }
`;

const StyledFormTitle = styled.strong`
  color: ${colors.textColor};
  font: var(--font-large);

  margin-bottom: 24px;
`;

export { StyledForm, StyledFormTitle };
