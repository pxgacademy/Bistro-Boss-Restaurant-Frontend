import PropTypes from "prop-types";
const SectionTitle = ({ title, subTitle, borderColor }) => {
  return (
    <div className="max-w-80 mx-auto text-center">
      <p className={`text-primaryColor mb-2 italic text-xl`}>
        ---{subTitle}---
      </p>
      <h3 className={`uppercase text-4xl py-3 border-y-[3px] ${borderColor}`}>
        {title}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default SectionTitle;
