export const handleInputChange = (setter) => (event) => {
  const { name, value } = event.target;
  setter((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

export const handleFormSubmit = (callback) => (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  callback(); // Call the provided callback with form data or logic
};
