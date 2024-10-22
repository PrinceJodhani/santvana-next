// app/components/AppointmentForm.jsx
"use client";
import React, { useState } from "react";

const AppointmentForm = ({ member, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    gender: "",
    // department:"",
    date: "",
    brief: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const message = `Hello,\nI want to make an appointment.\n\nName: ${formData.firstName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nGender: ${formData.gender}\nDate: ${formData.date}\nBrief: ${formData.brief}`;

    // Encode the message
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/919824218278?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappURL, "_blank");

    // Close the form
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          className="w-full mt-1 p-2 border rounded"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          name="phone"
          className="w-full mt-1 p-2 border rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Your Gender</label>
        <select
          name="gender"
          className="w-full mt-1 p-2 border rounded"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Preferred Date</label>
        <input
          type="date"
          name="date"
          className="w-full mt-1 p-2 border rounded"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      {/* <div>
        <label className="block text-gray-700">Department</label>
        <input
          type="text"
          name="department"
          className="w-full mt-1 p-2 border rounded"
          value={formData.department}
          onChange={handleChange}
          required
        />
      </div> */}
      <div>
        <label className="block text-gray-700">Enter in brief</label>
        <textarea
          name="brief"
          className="w-full mt-1 p-2 border rounded"
          rows="3"
          value={formData.brief}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded hover:bg-secondary transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
