import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Receba ofertas exclusivas em seu e-mail</h1>
        <p>Assine nosso newsletter e continue atualizado.</p>
        <div>
            <input type="email" placeholder='Seu e-mail' />
            <button>Assinar</button>
        </div>
    </div>
  )
}

export default NewsLetter