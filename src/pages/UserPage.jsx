import { Link } from "react-router-dom";

export default function UserPage() {
  return (
    <div>
      <h2>
        <Link to={"/login"}>Login</Link>
      </h2>
      <h2>
        <Link to={"/register"}>Register</Link>
      </h2>
    </div>
  );
}
