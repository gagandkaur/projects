import React, { useState } from "react";

function App() {

  /* ================= TASK 1 DATA ================= */
  const userData = {
    name: "Gagandeep Kaur",
    email: "gagan@example.com",
    department: "CSE AIML"
  };

  /* ================= TASK 2 STATE ================= */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* ================= COMPONENTS ================= */

  function Header() {
    return (
      <div style={styles.header}>
        <h2>Profile Page</h2>
      </div>
    );
  }

  function ProfileDetails(props) {
    return (
      <div style={styles.profile}>
        <h3>User Details</h3>
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Email:</strong> {props.email}</p>
        <p><strong>Department:</strong> {props.department}</p>
      </div>
    );
  }

  function Footer() {
    return (
      <div style={styles.footer}>
        <p>© 2026 Assignment 3 - React</p>
      </div>
    );
  }

  function LoginStatus() {
    return (
      <div style={styles.login}>
        <h3>Login Status</h3>

        {/* Ternary Operator */}
        <p>
          {isLoggedIn ? "Welcome, User" : "Please Login"}
        </p>

        {/* && Operator */}
        {isLoggedIn && (
          <p>You are successfully logged in.</p>
        )}

        <button
          style={styles.button}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }

  /* ================= MAIN RETURN ================= */

  return (
    <div style={styles.container}>
      <Header />

      <ProfileDetails
        name={userData.name}
        email={userData.email}
        department={userData.department}
      />

      <LoginStatus />

      <Footer />
    </div>
  );
}

/* ================= INTERNAL CSS ================= */
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial"
  },

  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "15px"
  },

  profile: {
    backgroundColor: "#f2f2f2",
    margin: "20px",
    padding: "15px",
    borderRadius: "8px"
  },

  login: {
    backgroundColor: "#e6f2ff",
    margin: "20px",
    padding: "15px",
    borderRadius: "8px"
  },

  footer: {
    backgroundColor: "#333",
    color: "white",
    padding: "10px"
  },

  button: {
    padding: "8px 12px",
    marginTop: "10px",
    cursor: "pointer"
  }
};

export default App;
