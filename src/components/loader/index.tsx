const Loader = () => {
  return (
    <div className="loader h-screen w-full bg-black absolute top-0 z-50">
      <div className="intern"></div>
      <div className="external-shadow">
        <div className="central"></div>
      </div>
    </div>
  );
};

export default Loader;
