const Input = ({ label, id, ...props }) => {
    return (
        <p className="control">
          <label htmlFor={id}>{label}</label>;
  <input id={id} required {...props} />;  
        </p>
    )
  
};
export default Input;
