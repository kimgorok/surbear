interface TopBarProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  leftSVG?: React.ReactNode;
  onRightClick?: React.MouseEventHandler<HTMLDivElement>;
  rightSVG?: React.ReactNode;
  title?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  onClick,
  leftSVG,
  onRightClick,
  rightSVG,
  title,
}) => {
  return (
    <div className="bg-white left-0 right-0 mx-auto fixed w-full max-w-[36rem] justify-center">
      <div className="flex px-6 py-3 justify-between">
        <div className="flex gap-2">
          <div onClick={onClick}>{leftSVG}</div>
          <div className="font-extrabold">{title}</div>
        </div>
        <div onClick={onRightClick}>{rightSVG}</div>
      </div>
    </div>
  );
};
