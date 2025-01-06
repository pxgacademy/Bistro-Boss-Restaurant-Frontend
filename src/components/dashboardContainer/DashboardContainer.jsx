import PropTypes from "prop-types";
import SectionTitle from "../sectionTitle/SectionTitle";

const DashboardContainer = ({
  children,
  className = "",
  title,
  subTitle,
  colors,
  titleStyles,
  styles,
}) => {
  return (
    <section
      className={`w-full min-h-screen p-5 md:p-10 bg-[#F3F3F3] font-poppins ${className}`}
    >
      {title && (
        <SectionTitle
          title={title}
          subTitle={subTitle}
          colors={colors}
          titleStyles={titleStyles}
          styles={styles}
        />
      )}
      {children}
    </section>
  );
};

DashboardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  styles: PropTypes.string,
  titleStyles: PropTypes.string,
  colors: PropTypes.string,
};

export default DashboardContainer;
