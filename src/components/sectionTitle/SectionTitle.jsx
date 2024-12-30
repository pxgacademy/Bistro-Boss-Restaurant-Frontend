import PropTypes from "prop-types";
const SectionTitle = ({ title, subTitle, color = 'text-darkOne' }) => {
  return (
    <div className="max-w-[350px] mx-auto text-center">
      <p className={`text-primaryColor mb-2 italic text-xl`}>
        ---{subTitle}---
      </p>
      <h3 className={`uppercase ${color} text-4xl py-3 border-y-[3px] border-[#E8E8E8]`}>
        {title}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default SectionTitle;
