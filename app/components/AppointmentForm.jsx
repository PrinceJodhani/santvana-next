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
    const message = `Hello,\nI want to make an appointment.\n\nName: ${formData.firstName}\nEmail: ${formData.email}\nGender: ${formData.gender}\nDate: ${formData.date}\nI Need Help For: ${formData.needHelpFor}\nBrief: ${formData.brief}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919824218278?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
    onClose();
  };

  const inputClasses =
    "w-full mt-1 px-3 py-2.5 border border-brown-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          First Name<span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          className={inputClasses}
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className={inputClasses}
          value={formData.email}
          onChange={handleChange}
          placeholder="abcd@gmail.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Your Gender</label>
        <select
          name="gender"
          className={inputClasses}
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
        <label className="block text-sm font-medium text-gray-700">
          Preferred Date<span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="date"
          name="date"
          className={inputClasses}
          value={formData.date}
          onChange={handleChange}
          min={minDate}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          I Need Help For<span className="text-red-500 ml-0.5">*</span>
        </label>
        <select
          name="needHelpFor"
          className={inputClasses}
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
          <option value="CBT (Cognitive Behavioral Therapy)">CBT</option>
          <option value="Couple Therapy">Couple Therapy</option>
          <option value="Relationship Therapy">Relationship Therapy</option>
          <option value="Family Therapy">Family Therapy</option>
          <option value="Child Development">Child Development</option>
          <option value="Psychological Assessment">Psychological Assessment</option>
          <option value="Other Problems">Other Problems</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Write Your Concern in Brief<span className="text-red-500 ml-0.5">*</span>
        </label>
        <textarea
          name="brief"
          className={inputClasses}
          rows="3"
          value={formData.brief}
          onChange={handleChange}
          required
          placeholder="Briefly describe your concern..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-brown-700 to-brown-800 hover:from-brown-800 hover:to-brown-900 text-white py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Submit via WhatsApp
      </button>
    </form>
  );
};

export default AppointmentForm;
