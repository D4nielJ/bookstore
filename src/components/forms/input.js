import { PropTypes } from 'prop-types';
import st from './forms.module.css';

const TextInput = ({
  value, changeEvent, placeholder, required,
}) => (
  <input
    type="text"
    name={value}
    id={value}
    value={value}
    onChange={changeEvent}
    placeholder={placeholder}
    className={st.input}
    required={required}
  />
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  changeEvent: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  changeEvent: () => {},
  placeholder: '',
  required: false,
};

export default TextInput;
