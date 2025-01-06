import PropTypes from "prop-types";
import loadingImg from "../../assets/others/loader3.gif";

const MiniLoading = ({ className = "" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <img src={loadingImg} alt="" />
    </div>
  );
};

MiniLoading.propTypes = {
  className: PropTypes.string,
};

export default MiniLoading;
