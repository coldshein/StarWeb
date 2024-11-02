import classNames from "classnames";

export const styledActive = ({ isActive }: { isActive: boolean }) => {
  return classNames({
    ["text-accent"]: isActive,
    ["text-main-text"]: !isActive,
  });
};
