import { useState } from "react";

const UseInput = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    search: "",
    image: ""
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return {
    inputs,
    setInputs,
    handleChange,
  };
};

export default UseInput;
