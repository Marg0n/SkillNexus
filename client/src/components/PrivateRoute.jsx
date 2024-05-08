import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from './Loader';

const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();
    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <Loader/>;
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }

    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;