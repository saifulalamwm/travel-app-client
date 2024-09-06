const Banner = () => {
  return (
    <div className="w-11/12 m-auto ">
      <div className="carousel m-auto banner rounded-xl">
        <div id="item1" className="carousel-item w-full m-auto">
          <img
            src="https://i.ibb.co/5hk41Bq/india.jpg"
            className="w-full object-cover banner "
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/jZyRGXN/landon.jpg"
            className="w-full  object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/594HyL2/The-Statue-of-Liberty.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full  object-cover">
          <img
            src="https://i.ibb.co/X2F1Xjt/Cox-s-Bazar-sea-beach.jpg"
            className="w-full  object-cover"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
