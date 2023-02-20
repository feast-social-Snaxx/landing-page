export default function FilterItem({ onClick, children, style, active=false }) {
  return (
    <button
      className={`txt-2 filter-item${active ? "-active" : ""} white-to-gradient-transition-with-text`}
      style={style}
      onClick={() => {
          onClick(active);
      }}>
      <span className="filter-item-label">{children}</span>
    </button>
  );
};
