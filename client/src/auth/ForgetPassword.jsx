import React from 'react';
import './styles.css';

export const ForgetPassword = () => {
  return (
    <div class="container">
      <form id="signup">
        <div class="header">
          <h3>Quên mật khẩu</h3>

          <p></p>
        </div>

        <div class="sep"></div>

        <div class="inputs">
          <input type="email" placeholder="E-mail" autofocus />

          <a id="submit" href="password.html">
            Tiếp tục
          </a>
        </div>
      </form>
    </div>
  );
};
