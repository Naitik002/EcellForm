



import { useState } from "react";
import { ref, push } from "firebase/database";
import { database } from "../firebase.js"; // Adjust the path if needed

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    scholarNumber: "",
    erdId: "",
    email: "",
    query: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Push to Firebase Realtime Database
      await push(ref(database, "users"), formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        scholarNumber: "",
        erdId: "",
        email: "",
        query: ""
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      setError("Failed to submit form. Try again later.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 ">
      <div className="bg-transparent text-white font-sans flex flex-col items-center justify-center w-full max-w-lg p-7 rounded-lg shadow-lg border border-gray-700 mt-10 md:mt-22">
        <h2 className="text-white text-3xl font-bold text-center">welcome to Ecell</h2>
        <p className="text-gray-400 text-center text-sm mt-2"># make things happen</p>

        <form className="mt-6 space-y-4 w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border border-gray-700 rounded-md p-3 text-white focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="number"
            name="scholarNumber"
            value={formData.scholarNumber}
            onChange={handleChange}
            placeholder="Scholar Number"
            required
            className="w-full border border-gray-700 rounded-md p-3 text-white focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="erdId"
            value={formData.erdId}
            onChange={handleChange}
            placeholder="ERD ID"
            required
            className="w-full border border-gray-700 rounded-md p-3 text-white focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail ID"
            required
            className="w-full border border-gray-700 rounded-md p-3 text-white focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Any Queries (Optional)"
            className="w-full border border-gray-700 rounded-md p-3 text-white focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full mt-4 bg-transparent text-blue-400 border border-blue-500 py-3 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {isSubmitted && (
        <p className="text-green-400 text-center mt-4">
          Form submitted successfully! 🎉
        </p>
      )}
      {error && (
        <p className="text-red-400 text-center mt-4">
          {error}
        </p>
      )}
    </div>
  );
}









