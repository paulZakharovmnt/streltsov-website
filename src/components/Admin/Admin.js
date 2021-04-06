import React, { useState } from "react";
import Auth from "./Auth";
import AdminPanel from "./AdminPanel";
import { fire } from "../../core/firebase";

const Admin = () => {
  const [user, setUser] = useState("");

  const handleLogout = () => {
    fire.auth().signOut();
    setUser("");
  };

  return (
    <div>
      {!user ? (
        <Auth user={user} setUser={setUser} />
      ) : (
        <AdminPanel handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default Admin;
