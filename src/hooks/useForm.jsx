// * @ Name: Hook useForm
// * @ Since: Version 1.0
// * @ Description: This hook is used to retrieve all the data entered by the user
// * @ -- in any contact form of the application.
// * @ Creator: Carlos Moctezuma aka @crdgom


import { useState, useEffect } from 'react';

function useForm(callback, defaults, validationSchema) {
  const [input, setInput] = useState(defaults);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setInput({ ...defaults });
  }, [defaults]);

  const validate = () => {
    let newErrors = {};
    for (const fieldName in validationSchema) {
      const fieldValue = input[fieldName];
      const fieldValidationFunction = validationSchema[fieldName];
      const fieldError = fieldValidationFunction(fieldValue);
      if (fieldError) {
        newErrors[fieldName] = fieldError;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validate();
    if (isFormValid) {
      callback(input);
    }
  };

  return {
    input,
    errors,
    handleInputChange,
    handleSubmit
  };
}

export default useForm;
