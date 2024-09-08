import AppButton from "./AppButton";
import PropTypes from 'prop-types';

const Card = ({title,img,description,price,advantages}) => {
  return (
    <section className="w-full shadow-xl flex flex-col gap-4 p-4 my-4 rounded-lg hover:scale-95 duration-300 justify-items-center">
      <img
        className="w-20 mx-auto mt-[-3rem] bg-white"
        src={img}
        alt={description}
      />
      <h2 className="text-2xl font-bold text-center py-8 h-[100px]">{title}</h2>
      <p className="text-center text-4xl font-bold ">${price}</p>
      <ul className="text-center font-medium h-[350px]">
        {advantages.map(advantage =><p key={advantage} className="py-2 border-b mx-8 mt-8 h-[70px]">{advantage}</p>)}
      </ul>
      <AppButton title="Start Trial" />
    </section>
  );
};

Card.propTypes = {
    title:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    advantages:PropTypes.array.isRequired,
    handleReMatchTheGame:PropTypes.func.isRequired,
  }

export default Card;
