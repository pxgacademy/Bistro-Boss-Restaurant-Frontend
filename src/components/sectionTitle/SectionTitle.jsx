import PropTypes from "prop-types";
const SectionTitle = ({
  title,
  subTitle,
  colors = "text-darkOne border-[#E8E8E8]",
  titleStyles = "",
  styles = "max-w-[350px] font-poppins",
}) => {
  return (
    <div className={`${styles} mx-auto text-center`}>
      {subTitle && (
        <p className={`text-primaryColor mb-2 italic text-xl normal-case`}>
          ---{subTitle}---
        </p>
      )}
      {title && (
        <h3
          className={`uppercase ${titleStyles} ${colors} text-4xl py-3 border-y-[3px]`}
        >
          {title}
        </h3>
      )}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  titleStyles: PropTypes.string,
  styles: PropTypes.string,
  colors: PropTypes.string,
};

export default SectionTitle;
