const Container = ({ children }) => {
  return (
    <div className="w-[90%] max-w-[800px] flex flex-col items-center justify-center mx-auto my-5 py-6 px-3 rounded-md bg-[#121212]">
      {children}
    </div>
  );
};

export default Container;
