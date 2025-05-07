import PropTypes from 'prop-types';
import {
  StyledInputGroupWrapper,
  StyledInputLabel,
  StyledTextInput,
} from './styles';

const InputGroup = ({
  type = 'text',
  defaultValue,
  value,
  label,
  onChange,
  placeholder,
  isRequired = false,
}) => {
  return (
    <StyledInputGroupWrapper>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledTextInput
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={isRequired}
        onChange={onChange}
      />
    </StyledInputGroupWrapper>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default InputGroup;
