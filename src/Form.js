import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Thanks, ${formData.name}! Your message has been submitted.`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={{ width: "100%", margin: "8px 0", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Submit</button>
      </form>
    </div>
  );
}
