const Note = ({ children, content }) => {
  return (
    <div className="pl-4 mt-7 flex items-center customMiniTablet:max-w-[800px] gap-2  italic text-[15px]">
      <p className={content}></p>
      <p className="text-white">{children}</p>
    </div>
  );
};

export default Note;
