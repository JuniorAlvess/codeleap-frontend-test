import PropTypes from 'prop-types';
import { Container, InputLabel, TextareaInput } from './styles';

const TextareaGroup = ({ label, defaultValue, value, onChange, placeholder, isRequired }) => {
  return (
    <Container>
      {label && <InputLabel>{label}</InputLabel>}
      <TextareaInput
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={isRequired}
        onChange={onChange}
      />
    </Container>
  );
};

TextareaGroup.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default TextareaGroup;
