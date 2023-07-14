import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Admin, Analytics, Dashboard, Home, LandingPage } from "./pages/index";
import { useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [user, setUser] = useState(null);
  const { loginWithRedirect } = useAuth0();

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <header>
        <NavBar />
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </header>

      <main>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="/analytics"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.permissions.includes("analize")}
                redirectTo="/home"
              >
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Admin />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
