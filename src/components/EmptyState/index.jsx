import { FiFilePlus } from 'react-icons/fi';
import { Container, Description, IconWrapper, Title } from './styles';

const EmptyState = () => {
  return (
    <Container>
      <IconWrapper>
        <FiFilePlus />
      </IconWrapper>
      <Title>Looks like there’s nothing here yet...</Title>
      <Description>Why not create a post and get things started?</Description>
    </Container>
  );
};

export default EmptyState;
