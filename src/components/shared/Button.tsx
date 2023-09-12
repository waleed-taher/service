interface buttonProps {
  title: string;
  className: string;
  divClassName: string;
}

const Button = ({ title, className, divClassName }: buttonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-[8px] px-6 py-3 hover:bg-blue-500 relative rounded-[10px] overflow-hidden border border-solid border-primary-color all-[unset] box-border ${className}`}
    >
      <div
        className={`relative font-spaceGrotesk text-primary-color hover:text-white hover:text-bold  text-[12px] text-center tracking-[0] leading-[normal] ${divClassName}`}
      >
        {title}
      </div>
    </button>
  );
};

export default Button;
