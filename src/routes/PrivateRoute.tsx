import { Navigate, useLocation } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = ({ children }: any) => {
    const authService = new AuthService();
    const location = useLocation();

    if (!authService.isAuthenticate()) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" state={{ from: location }} />
    }

    // authorized so return child components
    return children;
}

export default PrivateRoute