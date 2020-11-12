import "./submit.css";
const SubmitButton = ({ children, ...prop }) => {
  return (
    <div>
      <button {...prop} className="submit-button">
        {children}
      </button>
    </div>
  );
};
export default SubmitButton;
