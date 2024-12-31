import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Accept Terms:', acceptTerms);
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="signup-title">Đăng Ký</h2>
        <form onSubmit={handleSubmit}>
          <div className="signup-input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-input-group">
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="signup-input"
            />
          </div>
          <div className="signup-terms-group">
            <input
              type="checkbox"
              id="acceptTerms"
              checked={acceptTerms}
              onChange={() => setAcceptTerms(!acceptTerms)}
              className="signup-checkbox"
            />
            <label htmlFor="acceptTerms" className="signup-terms-label">
              Tôi đồng ý với điều khoản sử dụng
            </label>
          </div>
          <button type="submit" className="signup-button">Đăng Ký</button>
        </form>
        <div className="signup-login-link">
          <p>Đã có tài khoản? <a href="/login" className="login-link">Đăng nhập</a></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
