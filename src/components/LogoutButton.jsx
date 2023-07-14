import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <button onClick={() => logout()}>logout</button>;
  }
}

export default LogoutButton;
