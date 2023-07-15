import { useAuth0 } from "@auth0/auth0-react";
import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import "../styles/UserIcon.css";

function UserIcon() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="user-icon">
      {isAuthenticated && <ArrowLeftOnRectangleIcon onClick={() => logout()} />}
      {!isAuthenticated && (
        <UserCircleIcon onClick={() => loginWithRedirect()} />
      )}
    </div>
  );
}

export default UserIcon;
