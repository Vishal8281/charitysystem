import React ,{useContext} from "react";
import { Navigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";

const ProtectedRoute = ({ children }) => {
  // const { user } = TransactionContext();
  const { user } = useContext(TransactionContext);


  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;