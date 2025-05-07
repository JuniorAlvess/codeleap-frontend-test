import PropTypes from 'prop-types';
import { StyledModalContainer } from './styles';

const Modal = ({ children }) => {
  return (
    <StyledModalContainer>
      {children}
    </StyledModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
