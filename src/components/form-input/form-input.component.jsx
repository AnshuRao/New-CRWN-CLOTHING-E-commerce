import {FormInputLabel , Input, Group} from  './form-input.style.jsx';

const FormInput = ({ label, handleChange, ...otherProps }) => {
    
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
