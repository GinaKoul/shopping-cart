import { memo } from "react";

const Icon = memo(({ id, width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height}>
      <use xlinkHref={`/main-v2.svg#${id}`} />
    </svg>
  );
});

export default Icon;
