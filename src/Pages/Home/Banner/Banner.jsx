import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[700px] ">
        {/* single slider container */}
        <div id="slide1" className="carousel-item relative w-full">
          {/* slider image */}
          <img src={img1} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  text-left space-y-7 w-[800px] p-10 text-white ">
            <h3 className="text-2xl md:text-4xl lg:text-6xl">Affordable Price For Car Servicing</h3>
            <p className="text-2xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className=" flex items-center  justify-start gap-3 lg:gap-5">
              <button className="btn btn-warning">Discover more</button>
              <button className="btn btn-outline btn-accent">
                Latest Projects
              </button>
            </div>
          </div>
          {/* slider buttons */}
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0 ">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          {/* slider button ended here  */}
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  text-left space-y-7 w-[800px] p-10 text-white ">
            <h3 className="text-2xl md:text-4xl lg:text-6xl">Quality Car Repairs</h3>
            <p className="text-2xl">
              Our expert technicians provide top-notch repairs to keep your car
              running smoothly.
            </p>

            <div className=" flex items-center  justify-start gap-3 lg:gap-5">
              <button className="btn btn-warning">Discover more</button>
              <button className="btn btn-outline btn-accent">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  text-left space-y-7 w-[800px] p-10 text-white ">
            <h3 className="text-2xl md:text-4xl lg:text-6xl">Fast and Reliable Service</h3>
            <p className="text-2xl">
              Get your car serviced quickly and reliably by our experienced
              team.
            </p>

            <div className=" flex items-center  justify-start gap-3 lg:gap-5">
              <button className="btn btn-warning">Discover more</button>
              <button className="btn btn-outline btn-accent">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  text-left space-y-7 w-[800px] p-10 text-white ">
            <h3 className="text-2xl md:text-4xl lg:text-6xl">Expert Car Maintenance</h3>
            <p className="text-2xl">
              Trust our skilled mechanics to provide expert maintenance for your
              vehicle.
            </p>

            <div className=" flex items-center  justify-start gap-3 lg:gap-5">
              <button className="btn btn-warning">Discover more</button>
              <button className="btn btn-outline btn-accent">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        {/* updating from here */}
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  text-left space-y-7 w-[800px] p-10 text-white ">
            <h3 className="text-2xl md:text-4xl lg:text-6xl">Affordable Car Parts</h3>
            <p className="text-2xl">
              Find a wide range of high-quality car parts at affordable prices.
            </p>

            <div className=" flex items-center  justify-start gap-3 lg:gap-5">
              <button className="btn btn-warning">Discover more</button>
              <button className="btn btn-outline btn-accent">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  text-left space-y-7 w-[800px] p-10 text-white ">
            <h3 className="text-2xl md:text-4xl lg:text-6xl">Reliable Auto Services</h3>
            <p className="text-2xl">
              Our reliable auto services ensure your car stays in top condition.
            </p>

            <div className=" flex items-center  justify-start gap-3 lg:gap-5">
              <button className="btn btn-warning">Discover more</button>
              <button className="btn btn-outline btn-accent">
                Latest Projects
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5  bottom-0">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
