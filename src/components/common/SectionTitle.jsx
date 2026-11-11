
const SectionTitle = ({
  label,
  title,
  highlight,
  description,
  align = "center",
}) => {
  return (
    <div className={`section-title section-title-${align}`}>
      {label && (
        <span className="section-label">
          {label}
        </span>
      )}

      <h2 className="section-heading">
        {title}{" "}
        {highlight && (
          <span className="accent-text">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="section-subtitle">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
