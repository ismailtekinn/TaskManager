import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import { login } from '../../api/auth/authProcces';
import { SignInType } from '../../types/authType';


const SignIn = () => {
  const navigate = useNavigate(); // React Router v6 için
  const { handleToken } = useUser();
  const [formData, setFormData] = useState<SignInType>({
    UsernameorEmail: '',
    Password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.UsernameorEmail === '' || formData.Password === '') {
      return;
    }
     console.log(formData);
    const { user, token } = await login(formData);
    console.log("user and token: ",user);
    if (token) {
      handleToken(token);
      navigate('/'); 
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign In</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Enter phone
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    value={formData.UsernameorEmail}
                    className="form-control"
                    placeholder="Enter your phone"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.Password}
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <Link to="/pages/authentication/forgot-password" className="text-muted">
                  Forgot Password?
                </Link>
              </div>
              <div className="text-center mt-3">
                <p className="text-muted mb-0">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
