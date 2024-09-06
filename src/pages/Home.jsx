import { useLoaderData } from "react-router-dom";
import Banner from "../component/Banner";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const loadedSpots = useLoaderData();

  const [spots] = useState(loadedSpots);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div>
      <Banner />

      {/* most visited place  */}

      <div className="w-11/12 m-auto">
        <div className="mt-10  text-center">
          <p className="text-4xl font-bold">Most Visited Places</p>
          <p className="mt-4 w-full lg:w-1/2 m-auto">
            This tourist destination, of course, is not located in any foreign
            country, rather it sits very comfortably right here in my beautiful
            country on its northwest part. I have always wanted to visit this
            beautiful and exotic place, but I just couldn’t make it since my
            busy schedule didn’t exactly allow me to have my wish up until a few
            months ago.
          </p>
        </div>
        <div className="mt-10">
          <Slider {...settings}>
            {spots.map((spot, index) => (
              <div key={index}>
                {" "}
                {/* or use spot.id if available */}
                <img className="h-60 lg:h-96" src={spot.photo} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* most visited place  */}

      {/* Our benefit */}

      <div className="w-11/12 m-auto grid lg:grid-cols-2 grid-cols-1  bg-gradient-to-r from-indigo-400 to-cyan-400 my-20 ">
        <div className="mt-10  text-center">
          <p className="text-4xl font-bold">Our Benefit</p>
          <p className="w-full m-5 p-5   ">
            Traveling broadens perspectives, enriches cultural understanding,
            and offers a break from routine. It enhances creativity, reduces
            stress, and fosters personal growth. Exploring new places builds
            confidence, creates lasting memories, and strengthens relationships
            through shared experiences.
          </p>
          <div className="flex w-11/12 m-auto justify-between flex-wrap gap-5">
            <div className="grow w-60">
              {/* The button to open modal */}
              <label htmlFor="my_modal_7" className="btn">
                Personal Schedule
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className="grow w-60">
              {/* The button to open modal */}
              <label htmlFor="my_modal_7" className="btn">
                Luxury Interiors
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className="grow w-60">
              {/* The button to open modal */}
              <label htmlFor="my_modal_7" className="btn">
                Safe & Confidential
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className="grow w-60">
              {/* The button to open modal */}
              <label htmlFor="my_modal_7" className="btn">
                Professional Crew
              </label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Hello!</h3>
                  <p className="py-4">
                    This modal works with a hidden checkbox!
                  </p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img src="https://i.ibb.co/QcJx2py/Angkor-Wat.jpg" alt="" />
          <img src="https://i.ibb.co/2qLZBH4/Ha-Long-Bay.jpg" alt="" />
          <img src="https://i.ibb.co/0tKFyhH/Ho-Chi-Minh-City.jpg" alt="" />
          <img src="https://i.ibb.co/br7Wj5b/Phnom-Penh.jpg" alt="" />
        </div>
      </div>

      {/* Our benefit */}
    </div>
  );
};

export default Home;
