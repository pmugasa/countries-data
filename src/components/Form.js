const Form = ({ userInput, handleChange }) => {
  return (
    <form>
      <div>
        find countries <input value={userInput} onChange={handleChange} />
      </div>
    </form>
  );
};

export default Form;
