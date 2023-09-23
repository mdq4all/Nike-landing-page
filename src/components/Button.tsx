interface Props {
  label: string;
  iconURL?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  withfull?:boolean
}
const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  withfull
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:opacity-70 ${withfull && 'w-full'} ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red "
      }`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
