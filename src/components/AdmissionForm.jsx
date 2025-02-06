import { useState } from 'react';
import { School, BookOpen, Map, Check } from 'lucide-react';

export default function StudentEnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    currentStd: '',
    previousMarks: '',
    schoolName: '',
    branch: '',
    subjects: [],
    address: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const branches = ['Paldi Branch', 'Makarba Branch'];
  const subjects = ['Mathematics', 'Science', 'Social Studies', 'English', 'Gujarati', 'Hindi', 'Sanskrit'];

  const handleSubjectChange = (subject) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://education-academy-backend.onrender.com/enquiries/adddata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      console.log(formData)

      if (response.ok) {
        setIsSubmitted(true);
        setError('');
        setFormData({
          firstName: '',
          // middleName:'',
          lastName: '',
          phoneNumber: '',
          currentStd: '',
          previousMarks: '',
          schoolName: '',
          branch: '',
          subjects: [],
          address: ''
        });
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to submit form. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center transform transition-all duration-500 hover:scale-105">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your enquiry has been submitted successfully.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-6 px-8">
            <div className="flex items-center space-x-3">
              <School className="w-10 h-10 text-white animate-bounce" />
              <h1 className="text-3xl font-bold text-white">Student Enquiry Form</h1>
            </div>
            <p className="mt-2 text-blue-100">Please fill in all the required details below</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="py-8 px-8 space-y-8">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                {error}
              </div>
            )}

            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
                {/* <input
                  type="text"
                  placeholder="Middle Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.middleName}
                  onChange={(e) => setFormData({...formData, middleName: e.target.value})}
                /> */}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                />
              </div>
            </div>

            {/* Academic Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <School className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">Academic Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Current Standard"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.currentStd}
                  onChange={(e) => setFormData({...formData, currentStd: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="Previous Marks"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.previousMarks}
                  onChange={(e) => setFormData({...formData, previousMarks: e.target.value})}
                />
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                  value={formData.schoolName}
                  onChange={(e) => setFormData({...formData, schoolName: e.target.value})}
                />
              </div>
            </div>

            {/* Branch Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Map className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-800">Branch Selection</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {branches.map((branch) => (
                  <div
                    key={branch}
                    onClick={() => setFormData({...formData, branch})}
                    className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                      formData.branch === branch
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{branch}</span>
                      {formData.branch === branch && (
                        <Check className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Subject Selection</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {subjects.map((subject) => (
                  <div
                    key={subject}
                    onClick={() => handleSubjectChange(subject)}
                    className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                      formData.subjects.includes(subject)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{subject}</span>
                      {formData.subjects.includes(subject) && (
                        <Check className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <textarea
                placeholder="Enter your complete address"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}