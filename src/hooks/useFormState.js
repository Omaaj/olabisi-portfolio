import { useState } from "react";
import validator from "validator";

const useFormState = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);
  const [errorState, setErrorState] = useState({});

  const validError = (name, value) => {
    if (!value?.trim() && name !== "subject") return `${name} cannot be empty`;
    switch (name) {
      case "email":
        if (value && !validator.isEmail(value)) return "Invalid email address";
        break;

      default:
        break;
    }
  };

  const handleStateChange = (e) => {
    const { name, value } = e.target;

    setFormState((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    const error = validError(name, value);

    setErrorState((prevError) => ({
      ...prevError,
      [name]: error,
    }));
  };

  const handleSubmit = (e, callback) => {
    e.preventDefault();

    let newError = {};

    Object.keys(formState).forEach((field) => {
      const error = validError(field, formState[field]);
      if (error) {
        newError[field] = error;
      }
    });

    if (Object.keys(newError).length > 0) {
      setErrorState(newError);
      return;
    }

    callback();
    setFormState(initialValue);
    setErrorState({});
  };

  return { formState, errorState, handleStateChange, handleSubmit };
};

export default useFormState;
