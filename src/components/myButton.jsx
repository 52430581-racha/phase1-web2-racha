const MyButton = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className="btn btn-success">
      {text}
    </div>
  );
};

export default MyButton;
