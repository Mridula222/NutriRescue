import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  allowedRole,
}: {
  children: React.ReactNode;
  allowedRole: "donor" | "ngo";
}) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const role = localStorage.getItem("role");

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (role !== allowedRole) return <Navigate to="/" replace />;

  return <>{children}</>;
}
