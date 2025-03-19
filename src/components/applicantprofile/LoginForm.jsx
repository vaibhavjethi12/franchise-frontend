import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    userId: '',
    password: ''
  });

  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const validateUserId = (userId) => {
    if (!userId) {
      return 'User ID is required';
    }
    if (userId.length < 4) {
      return 'User ID must be at least 4 characters long';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return 'Password must contain at least one special character (!@#$%^&*)';
    }
    return '';
  };

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear messages when user starts typing
    setSubmitError('');
    setSubmitSuccess('');

    // Validate on change
    const validationError = name === 'userId'
      ? validateUserId(value)
      : validatePassword(value);

    setErrors(prev => ({
      ...prev,
      [name]: validationError
    }));
  };

  const isFormValid = () => {
    return !errors.userId && !errors.password && formData.userId && formData.password;
  };

  async function dosave(e) {
    e.preventDefault();
    if (!isFormValid()) {
      setSubmitError('Please fix the errors before submitting.');
      return;
    }

    // Check for admin credentials
    if (formData.userId === 'admin123' && formData.password === 'Admin@123') {
      navigate(`/application`);
      return;
    }

    var url = "http://localhost:2025/user/login";
    let resp = await axios.post(url, formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

    if (resp.data.status === true) {
      setSubmitSuccess(resp.data.msg);
      localStorage.setItem("userId", formData.userId);
      navigate(`/dashboard`);
      setSubmitError('');
    } else {
      setSubmitError(resp.data.msg);
      setSubmitSuccess('');
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form>
          {submitError && (
            <div className="bg-red-500 text-white p-3 rounded mb-4 text-sm">
              {submitError}
            </div>
          )}
          {submitSuccess && (
            <div className="bg-green-500 text-white p-3 rounded mb-4 text-sm">
              {submitSuccess}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              id="userId"
              name="userId"
              type="text"
              value={formData.userId}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.userId ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your user ID"
            />
            {errors.userId && (
              <p className="text-red-500 text-sm mt-1">{errors.userId}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={passwordVisible ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="button"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
            onClick={dosave}
            disabled={!isFormValid()}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm; 