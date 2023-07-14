import { useState } from "react";
import "../styles/Form.css";

function UserForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };
  return (
    <div className="form">
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          id="password"
        />
      </form>
    </div>
  );
}

export default UserForm;
