import React, { useState } from "react";

function Travel() {
  const [form, setForm] = useState({
    name: "",
    destination: "",
    email: "",
    tickets: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.destination || !form.email || !form.tickets) {
      setMsg("All fields are required.");
      return;
    }

    const ticketNum = Number(form.tickets);
    if (ticketNum < 1 || ticketNum > 10) {
      setMsg("Tickets must be between 1 and 10.");
      return;
    }

    setMsg("✔ Registered Successfully! Happy Journey ✈");
  };

  const handleReset = () => {
    setForm({
      name: "",
      destination: "",
      email: "",
      tickets: "",
    });
    setMsg("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>✈ Travel Registration Form</h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <label style={styles.label}>Traveler Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
          />

          <label style={styles.label}>Destination</label>
          <input
            type="text"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            placeholder="Enter destination"
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={styles.input}
          />

          <label style={styles.label}>Number of Tickets</label>
          <input
            type="number"
            name="tickets"
            value={form.tickets}
            onChange={handleChange}
            min="1"
            max="10"
            style={styles.input}
          />

          <button type="submit" style={styles.btn}>Submit</button>
          <button type="button" onClick={handleReset} style={styles.resetBtn}>Reset</button>
        </form>

        <p style={styles.msg}>{msg}</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
  },
  card: {
    backgroundColor: "#fff",
    color: "#333",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    marginBottom: "15px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  btn: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  resetBtn: {
    backgroundColor: "#6c757d",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  msg: {
    textAlign: "center",
    marginTop: "10px",
    color: "green",
  },
};

export default Travel;