import React from 'react';
import './style.css';

export const Register = () => {
  return (
    <div class="container">
      <form id="signup">
        <div class="header">
          <h3>Đăng ký</h3>

          <p></p>
        </div>

        <div class="sep"></div>

        <div
          class="inputs"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <input type="email" placeholder="Tên tài khoản" autofocus />

          <input type="email" placeholder="E-mail" autofocus />

          <input type="password" placeholder="Mật khẩu" />

          <input type="password" placeholder="Xác nhận mật khẩu" />

          <a id="submit" href="/">
            Đăng ký
          </a>

          <div class="under">
            <label class="terms">
              Đã có tài khoản? <a href="/">Đăng nhập</a>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
