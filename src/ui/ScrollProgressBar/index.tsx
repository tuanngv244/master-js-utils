import "./style.css";
type Props = {
  clsStyles?: string;
};

const ScrollProgressBar: React.FC<Props> = ({ clsStyles }) => {
  return (
    <div
      className={`scroll-progress origin-left h-1 w-full bg-gradient-to-r from-indigo-500 to-teal-500 z-[1000] fixed top-0 left-0 ${
        clsStyles || ""
      }`}
    />
  );
};

export default ScrollProgressBar;
