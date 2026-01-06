const Button = ({
  id,
  title,
  containerClass,
  btnIcon,
  onClickFunc,
  disableFunc,
}) => {
  return (
    <button
      id={id}
      onClick={onClickFunc}
      disabled={disableFunc}
      className={`btn-motion group w-fit h-14 px-[30px] py-2.5 rounded-full ${containerClass}`}
    >
      <span className="flex justify-center items-center gap-5">
        <p className="font-medium whitespace-nowrap">{title}</p>
        {btnIcon && (
          <i className="group-hover:-rotate-45 transition-transform ease-in-out duration-400">
            {btnIcon}
          </i>
        )}
      </span>
    </button>
  );
};

export default Button;
