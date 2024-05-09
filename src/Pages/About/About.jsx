import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch  justify-start gap-3 lg:gap-5   my-10">
      <div className=" md:w-1/2   relative">
        <img src={person} alt="" className="w-4/5 rounded-lg" />
        <img
          src={parts}
          alt=""
          className="absolute right-0 bottom-0 w-64 h-64 border-8 border-white rounded-lg "
        />
      </div>

      <div className="space-y-6  md:w-1/2">
        <span className="text-xl text-error font-bold capitalize">
          about us
        </span>
        <h2 className="text-5xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <div className="text-base text-gray-500 space-y-4">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{' '}
          </p>
        </div>
        <button className="capitalize btn btn-error">get more info</button>
      </div>
    </div>
  );
};

export default About;
