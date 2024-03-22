import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name = "", value } = target;

    if (name.includes(".")) {
      const [category, fieldName] = name.split(".");

      setFormState((prevState) => ({
        ...prevState,
        [category]: {
          ...prevState[category],
          [fieldName]: value,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onResetInput = (name) => {
    if (name.includes(".")) {
      const [category, fieldName] = name.split(".");

      setFormState((prevState) => ({
        ...prevState,
        [category]: {
          ...prevState[category],
          [fieldName]: "",
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onResetInput,
    ...formValidation,
    isFormValid,
  };
};
