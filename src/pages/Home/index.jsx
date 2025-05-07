import Header from '../../components/Header';
import Posts from '../../components/Posts';

import { BsArrowUpCircle } from 'react-icons/bs';
import { useScroll } from '../../hooks/getScroll';
import {Container} from './styles';

const Home = () => {
  const { scroll } = useScroll();

  return (
    <Container>
      <Header />
      <Posts />
      <BsArrowUpCircle
        className={scroll > 500 ? 'arrow-up enable' : 'arrow-up'}
        onClick={() => window.scrollTo(0, 0)}
      />
    </Container>
  );
};

export default Home;
