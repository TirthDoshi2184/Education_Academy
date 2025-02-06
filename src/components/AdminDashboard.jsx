import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    currentStd: "",
    previousMarks: "",
    schoolName: "",
    branch: "",
    subjects: "",
    address: "",
  });

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('https://education-academy-backend.onrender.com/enquiries/getdata');
      console.log(response.data);
      setEnquiries(response.data.data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this enquiry?")) {
      try {
        await axios.delete(`https://education-academy-backend.onrender.com/enquiries/deletedata/${id}`);
        fetchEnquiries();
      } catch (error) {
        console.error("Error deleting enquiry:", error);
      }
    }
  };

  const handleEdit = (enquiry) => {
    setEditingEnquiry(enquiry._id);
    setFormData(enquiry);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://education-academy-backend.onrender.com/enquiries/editdata/${editingEnquiry}`, formData);
      setEditingEnquiry(null);
      fetchEnquiries();
    } catch (error) {
      console.error("Error updating enquiry:", error.response ? error.response.data : error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Student Enquiries Dashboard</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enquiries.map((enquiry) => (
            <div key={enquiry._id} className="bg-white p-6 rounded-lg shadow-md border">
              {editingEnquiry === enquiry._id ? (
                <form onSubmit={handleUpdate} className="space-y-4">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="First Name"
                  />
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Last Name"
                  />
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Phone Number"
                  />
                  <input
                    name="currentStd"
                    value={formData.currentStd}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Current Standard"
                  />
                  <input
                    name="previousMarks"
                    value={formData.previousMarks}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Previous Marks"
                  />
                  <input
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="School Name"
                  />
                  <input
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Branch"
                  />
                  <input
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Subjects (comma separated)"
                  />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                    placeholder="Address"
                    rows="2"
                  />
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingEnquiry(null)}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {enquiry.firstName} {enquiry.lastName}
                  </h2>
                  <p className="text-gray-600">📞 {enquiry.phoneNumber}</p>
                  <p className="text-gray-600">🏫 {enquiry.schoolName}</p>
                  <p className="text-gray-600">🎓 Standard: {enquiry.currentStd}</p>
                  <p className="text-gray-600">📚 Branch: {enquiry.branch}</p>
                  <p className="text-gray-600">📊 Previous Marks: {enquiry.previousMarks}</p>
                  <div className="mt-2">
  <h3 className="text-gray-800 font-semibold">Subjects:</h3>
  <div className="flex flex-wrap gap-2 mt-1">
    {(Array.isArray(enquiry.subjects) ? enquiry.subjects : String(enquiry.subjects || "").split(",")).map((subject, index) => (
      <span
        key={index}
        className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs"
      >
        {subject.trim()}
      </span>
    ))}
  </div>
</div>

                  <p className="text-gray-600 mt-2">📍 {enquiry.address}</p>
                  <div className="flex mt-4 space-x-4">
                    <button
                      onClick={() => handleEdit(enquiry)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(enquiry._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      ❌ Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
