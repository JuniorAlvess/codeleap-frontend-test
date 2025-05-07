import PropTypes from 'prop-types';
import {StyledForm, StyledFormTitle} from './styles';

const Form = ({ onSubmit, title, children }) => (
  <StyledForm onSubmit={onSubmit}>
    <StyledFormTitle>{title}</StyledFormTitle>
    {children}
  </StyledForm>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
