import PropTypes from 'prop-types';
import { LoadingIcon, StyledButton } from './styles';

const Button = ({
  type = 'text',
  isDisabled = false,
  onClick = () => {},
  style = {},
  isLoading = false,
  text,
}) => {
  return (
    <StyledButton type={type} disabled={isDisabled} onClick={onClick} style={style}>
      {text}
      {isLoading && <LoadingIcon />}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  text: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

export default Button;
