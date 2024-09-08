
import Data from "../CARDS_DATA";
import Card from "./Card";

const Cards = () => {
  return (
      <ul className='w-full mx-auto grid md:grid-cols-3 gap-8 py-16 px-4 '>
          {Data.map(data => <li key={data.id}><Card  {...data}/></li> )}
      </ul>
  );
};

export default Cards;