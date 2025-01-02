import PropTypes from "prop-types";

const AuthContainer = ({ children }) => {
  return (
    <section className="w-full h-screen bg-[url(./assets/reservation/wood-grain-pattern.png)] bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <div className="bg-[url(./assets/reservation/wood-grain-pattern.png)] bg-no-repeat bg-center bg-cover shadow-2xl w-11/12 md:w-10/12 lg:w-3/4">
        {children}
      </div>
    </section>
  );
};

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContainer;
