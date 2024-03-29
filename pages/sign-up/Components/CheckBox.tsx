interface CheckBoxProps {
  inputChecked: boolean;
  onClick: () => void;
  label: string;
  isAll?: boolean;
  showSheet?: any;
}

export const Checkbox = ({
  inputChecked,
  onClick,
  label,
  isAll,
  showSheet,
}: CheckBoxProps) => (
  <div className="flex justify-center items-center gap-4  py-[22px]">
    <div
      onClick={onClick}
      className={`check-box ${inputChecked ? "bg-[#6E7CF2]" : "bg-white"}`}
    />
    <div className="text-sm font-bold">{label}</div>
    {/* 보기 버튼 */}
    {!isAll && (
      <button
        onClick={showSheet}
        className="text-xs justify-center border-[1.5px] border-[#6E7CF2] text-[#6E7CF2] px-2 py-1 font-bold ml-[14px] rounded-xl"
      >
        보기
      </button>
    )}
  </div>
);
