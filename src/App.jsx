import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { Admin, Analytics, Dashboard, Home, LandingPage } from "./pages/index";
import { useState } from "react";
import "./styles/App.css";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import LogoutButton from "./components/LogoutButton";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <header>
        <NavBar />
        <LoginButton />
        <LogoutButton />
      </header>

      <main>
        <Profile />
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
