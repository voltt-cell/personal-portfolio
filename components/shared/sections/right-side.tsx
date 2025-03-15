const RightSide = () => {
  return (
    <div className="h-[90vh] flex-col items-center justify-end w-32 gap-6 hidden xl:inline-flex fixed right-0 bottom-0">
      <a href="mailto:vermaloveleet@gmail.com">
        <p className="text-sm rotate-90 w-80 hover:text-teal-500 dark:hover:text-teal-400 tracking-wide">
          vermaloveleet@gmail.com
        </p>
      </a>
      <div className="w-[2px] h-28 dark:bg-white bg-black"></div>
    </div>
  );
};

export default RightSide;
