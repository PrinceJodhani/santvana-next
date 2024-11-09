// app/components/AppointmentForm.jsx
"use client";
import React, { useState } from "react";

const AppointmentForm = ({ member, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    gender: "",
    date: "",
    brief: "",
    needHelpFor: "",
  });

  // Calculate tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const minDate = getTomorrowDate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const message = `Hello,\nI want to make an appointment.\n\nName: ${formData.firstName}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate: ${formData.date}\nI Need Help For: ${formData.needHelpFor}\nBrief: ${formData.brief}`;

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
        <label className="block text-gray-700">First Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          name="firstName"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.email}
          onChange={handleChange}
          placeholder="abcd@gmail.com"
        />
      </div>
      <div>
        <label className="block text-gray-700">Your Gender</label>
        <select
          name="gender"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Preferred Date<span className="text-red-500">*</span></label>
        <input
          type="date"
          name="date"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.date}
          onChange={handleChange}
          min={minDate} // Disable past and today's dates
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">I Need Help For<span className="text-red-500">*</span></label>
        <select
          name="needHelpFor"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={formData.needHelpFor}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Over Thinking">Over Thinking</option>
          <option value="Stress Management">Stress Management</option>
          <option value="Anger Management">Anger Management</option>
          <option value="Child Counselling">Child Counselling</option>
          <option value="Depression">Depression</option>
          <option value="Anxiety">Anxiety</option>
          <option value="Phobia">Phobia</option>
          <option value="Bipolar">Bipolar</option>
          <option value="OCD">OCD</option>
          <option value="GAD">GAD</option>
          <option value="Schizophrenia">Schizophrenia</option>
          <option value="Addiction">Addiction</option>
          <option value="CBT (Cognitive Behavioral Therapy)">CBT (Cognitive Behavioral Therapy)</option>
          <option value="Couple Therapy">Couple Therapy</option>
          <option value="Relationship Therapy">Relationship Therapy</option>
          <option value="Family Therapy">Family Therapy</option>
          <option value="LGBTQAI Therapy">LGBTQAI Therapy</option>
          <option value="Other Problems">Other Problems</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700">Write Your Concern in Brief<span className="text-red-500">*</span></label>
        <textarea
          name="brief"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          rows="3"
          value={formData.brief}
          onChange={handleChange}
          required
          placeholder="Write..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AppointmentForm;
