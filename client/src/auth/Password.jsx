import React from 'react';
import './styles.css';

export const Password = () => {
  return (
    <div class="container">
      <form id="signup">
        <div class="header">
          <h3>Quên mật khẩu</h3>

          <p></p>
        </div>

        <div class="sep"></div>

        <div class="inputs">
          <input type="password" placeholder="Mật khẩu" />
          <input type="password" placeholder="Xác nhận mật khẩu" />
          Tiếp tục
        </div>
      </form>
    </div>
  );
};
