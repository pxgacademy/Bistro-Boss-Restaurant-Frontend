import PropTypes from "prop-types";

const Section = ({ children, className = "max-w-7xl" }) => {
  return (
    <section className="px-5">
      <div className={`mx-auto mt-16 md:mt-24 ${className}`}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
