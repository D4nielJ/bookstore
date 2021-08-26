import st from './forms.module.css';

const TextInput = ({value, changeEvent, placeholder, required}) => {

  return (
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
};

export default TextInput;
