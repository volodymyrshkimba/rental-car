const Icon = ({ name, width = 24, height = 24, color = 'currentColor' }) => {
  return (
    <svg width={width} height={height} fill={color} aria-hidden="true">
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
