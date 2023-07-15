import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <h1>User Profile</h1>
        <img src={user.picture} alt="imagen" />
      </div>
    );
  }
}

export default Profile;
