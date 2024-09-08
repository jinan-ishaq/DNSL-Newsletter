import PropTypes from 'prop-types';

const AppButton = ({title, className}) => {
  const defaultClassName = `bg-black w-[200px] rounded-md font-medium my-4 py-3 text-white mx-auto`
  const combinedClassName = `${className || ''} ${defaultClassName}`;
  return (
    <button className={combinedClassName}>
         {title}
    </button>
  )
}

AppButton.propTypes = {
  title:PropTypes.string.isRequired,
  className:PropTypes.string,
};

export default AppButton