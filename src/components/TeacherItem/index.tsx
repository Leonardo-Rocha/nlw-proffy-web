import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://pbs.twimg.com/profile_images/1275367613640708097/WBW4hV0m_400x400.jpg" alt="doge"/>
        <div>
          <strong>Doge</strong>
          <span>Bark</span>
        </div>
      </header>

      <p>
        Cute doggo.
        <br/> <br/>
        Bark all the time and cute things.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 5,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
