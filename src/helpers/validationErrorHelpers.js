const validationErrorHelpers = (validationError) => {
  console.error(validationError);
  return validationError.message;
};

export default validationErrorHelpers;
