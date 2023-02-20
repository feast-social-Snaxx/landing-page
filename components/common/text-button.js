export default function TextButton({ onClick, children, style, light = true, disabled = false }) {
  const getClassNames = () => {
    if (!disabled) {
      if (light) {
        return "white-to-gradient-transition-with-text text-button-light";
      } else {
        return "light-grey-to-gradient-transition-with-text text-button-dark";
      }
    } else {
      if (light) {
        return "text-button-light-disabled";
      } else {
        return "text-button-dark-disabled";
      }
    }
    return 
  }
  return (
    <button
      className={`text-button txt-7 ${getClassNames()}`}
      style={style}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}>
      <span className="text-button-label">{children}</span>
    </button>
  );
};
