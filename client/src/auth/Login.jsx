import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './style.css';

export const Login = () => {
  const navigatorTo = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token', `${data}`);
    navigatorTo('/', {
      state: data,
    });
  };

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form id="signup">
        <div className="header">
          <h3>Đăng nhập</h3>

          <p></p>
        </div>

        <div className="sep"></div>

        <div className="inputs">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="email"
              placeholder="E-mail"
              autoFocus
              onChange={(e) =>
                setData({ ...data, [e.target.name]: e.target.value })
              }
              name="email"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              name="password"
              onChange={(e) =>
                setData({
                  ...data,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          <div className="checkboxy">
            <input name="cecky" id="checky" value="1" type="checkbox" />
            <label className="terms">
              Hiện mật khẩu <Link to="/forget">Quên mật khẩu</Link>
            </label>
          </div>

          <button id="submit" type="submit">
            Đăng nhập
          </button>

          <div className="under">
            <label className="terms">
              Chưa có tài khoản? <a href="/register">Đăng ký</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
