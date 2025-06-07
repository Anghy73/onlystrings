import { Navigate, Outlet, useLocation } from "react-router";
import type { User } from "../types"

interface ProtectedRoutesProps {
  user: User | null;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user }) => {
  console.log(user);
  const location = useLocation()
  const rutaActual = location.pathname
  console.log(rutaActual);

  if (!user && rutaActual != '/login' && rutaActual != '/register') {
    return <Navigate to="/" replace />;
  }

  if (user && (rutaActual == '/login' || rutaActual == "/register")) {
    return <Navigate to="/" replace />;
  }

  return (
    <Outlet />
  )
};

export default ProtectedRoutes;