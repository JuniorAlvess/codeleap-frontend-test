import PropTypes from 'prop-types';
import { StyledModalContainer } from './styles';

const Modal = ({ children }) => {
  return (
    <StyledModalContainer>
      <div>
        {children}
      </div>
    </StyledModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
