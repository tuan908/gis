import React from 'react';
import './styles.css';
export const Result = () => {
  return (
    <div class="container">
      <form id="signup">
        <div class="header">
          <h3>Quên mật khẩu</h3>

          <p></p>
        </div>

        <h4>Bạn đã thay đổi mật khẩu thành công!</h4>

        <div class="under">
          <label class="terms">
            {' '}
            <a href="signIn.html">Đăng nhập</a> để tiếp tục
          </label>
        </div>
      </form>
    </div>
  );
};
