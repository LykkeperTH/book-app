import "./cancel.css";
const CancelButton = ({ children, ...prop }) => {
  return (
    <button {...prop} className="cancel-button">
      {children}
    </button>
  );
};
export default CancelButton;
