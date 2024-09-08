import manageData from "../assets/dsphoto.avif";
import AppButton from "./AppButton";

const Manage = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <section className="max-w-[90%] mx-auto grid md:grid-cols-2 md:space-x-8">
        <img
          className="w-[500px] mx-auto my-4 rounded self-center	"
          src={manageData}
          alt="Manage Data"
        />
        <section className="flex flex-col justify-center">
          <p className="text-[#ea6e40] font-bold text-lg">MANAGE YOUR DASHBOARD</p>
          <h1 className="lg:text-4xl text-2xl font-bold py-2 ">
            Manage Data Seamlessly
          </h1>
          <p className="text-justify ">
            Assisting you with everything you need to effectively organize and
            manage your data in a precise and proficient manner. Whether you are
            seeking clarity, efficiency, or seamless organization, we strive to
            ensure that your data is structured and handled in the most accurate
            and professional way possible, making your workflow smoother and
            more productive.
          </p>
          <AppButton title="Get Started" />
        </section>
      </section>
    </section>
  );
};

export default Manage;
