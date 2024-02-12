import React from 'react';
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Cadastro</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Nome' />
          <input type="email" placeholder='Endereço de e-mail' />
          <input type="password" placeholder='Senha de acesso' />
        </div>
        <button>Continuar</button>
        <p className="login-signup-login">Já possui uma conta? <span>Entre aqui</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>Ao continuar, concordo com os termos de uso e política de privacidade.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup