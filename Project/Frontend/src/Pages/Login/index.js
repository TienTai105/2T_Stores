import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-title">Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <div className="login-input-group">
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
            />
          </div>
          <div className="login-remember-group">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="login-checkbox"
            />
            <label htmlFor="rememberMe" className="login-remember-label">Nhớ mật khẩu</label>
          </div>
          <button type="submit" className="login-button">Đăng Nhập</button>
        </form>
        <div className="login-signup-link">
          <p>Chưa có tài khoản? <a href="/signup" className="signup-link">Đăng ký</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
