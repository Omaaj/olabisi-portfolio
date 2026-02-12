const Subtitle = ({ first, second }) => {
  return (
    <h2 className="text-[30px] font-bold tracking-wide max-w-max">
      {first}
      <span className="pl-2 text-customOrange-100">{second}</span>
    </h2>
  );
};

export default Subtitle;
