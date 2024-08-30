import { useNavigate } from "react-router-dom";

// Function to handle logout
export const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout triggered"); // Debugging line
    localStorage.removeItem("authToken");
    // Perform any additional logout logic here (e.g., clearing tokens)
    navigate("/SignIn", { replace: true }); // Redirect to sign-in page
  };

  return handleLogout;
};
