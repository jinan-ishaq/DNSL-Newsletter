import PropTypes from 'prop-types';

const AppButton = ({title}) => {
  return (
    <button className="bg-black w-[200px] rounded-md font-medium my-4 py-3 text-white">
         {title}
    </button>
  )
}

AppButton.propTypes = {
  title:PropTypes.string.isRequired,
};

export default AppButton