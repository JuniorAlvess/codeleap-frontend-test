import styled from "styled-components";
import colors from "../../styles/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 40px 20px;
  margin-top: 40px;
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: ${colors.grey};
  margin-bottom: 8px;
`;

const Title = styled.p`
  color: ${colors.grey};
  font: var(--font-large);
`;

const Description = styled.p`
  font: var(--font-medium);
  color: ${colors.grey};
`;

export { Container, IconWrapper, Title, Description };
