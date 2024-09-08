import { ReactTyped } from "react-typed";
import AppButton from "./AppButton";

const OverView = () => {
  return (
    <section className="w-full mx-auto  text-white bg-[#FEBB37]">
    <section className="w-11/12 text-center flex flex-col gap-6 lg:justify-center items-center relative h-[70vh] mx-auto lg:h-[90vh">
    <section className="mt-4">
        <h1 className=" text-4xl text-[#ea6e40] font-bold p-2 my-3 lg:text-5xl ">
          Want To Master Data Structure ?!
        </h1>
        <h2 className="lg:text-6xl text-3xl font-bold lg:py-6 italic">
          DNSL Is The Optimal Solution.
        </h2>
      </section>
      <ReactTyped
        className="text-2xl my-8 w-3/4 lg:text-3xl"
        strings={[
          "We are a global leader in tech innovation.",
          "We provide Well Organized DS Courses.",
          "Your success is our priority.",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <section className="absolute bottom-6 lg:static">
        <p className="md:text-2xl text-lg text-white">
          Ready to start you journey 🤩.
        </p>
        <AppButton title="Get Started" />
      </section>
    </section>
    </section>
  );
};

export default OverView;
