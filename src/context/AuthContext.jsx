import PropTypes from 'prop-types';
import { AuthContextProvider } from './ContextProvider';

const AuthContext = ({children}) => {


    const value = {age: 26}


    return (
        <AuthContextProvider.Provider value={value}>
            {children}
        </AuthContextProvider.Provider>
    );
};

AuthContext.propTypes = {
  children: PropTypes.node.isRequired,
};


export default AuthContext;