import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import { Admin, Analytics, Dashboard, Home, LandingPage } from "./pages/index";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Profile />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="/analytics"
            element={
              <ProtectedRoute isAllowed={isAuthenticated} redirectTo="/home">
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
