import PropTypes from "prop-types";

const Cover = ({ title, description, titleSize, bgImg, coverHight }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`${coverHight} w-full bg-no-repeat bg-center bg-cover flex items-center justify-center
        `}
    >
      <div className="w-full max-w-[1000px] mx-auto bg-black/40 backdrop-blur py-16">
        <div className="max-w-[750px] mx-auto text-center text-white">
          <h2 className={`${titleSize} font-Cinzel uppercase mb-2`}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  titleSize: PropTypes.string,
  bgImg: PropTypes.string.isRequired,
  coverHight: PropTypes.string,
};

export default Cover;
