import React from 'react';
import './index.css'

export default function App() {

  return (
    <div id="body">
      <Header />
      <Card
        className='section'
        img='./Capture1.PNG'
        title='Sobre a empresa'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <Card
        className='section'
        img='./Capture1.PNG'
        title='Sobre a empresa'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <Card
        className='section'
        img='./Capture1.PNG'
        title='Sobre a empresa'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <ContactContainer />
    </div>
  );
}
const Body = () => {
  return (
    <div id="body">
      <Header />
      <Card
        className='section'
        img='./Capture1.PNG'
        title='Sobre a Empresa'
        description=' '
      />
      <ContactContainer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <span className="header-title">
        Squad House
      </span>
      <br />
      <span className="header-text">
        Somos especialistas em algumas coisas...
      </span>
    </div>
  );
}

const Card = (props: any) => {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt="" />
      </div>
      <div className="big-div">
        <span className="div-title">
          {props.title}
        </span>
        <br />
        <span>
          {props.description}
        </span>
      </div>
    </div>
  );
}

const ContactContainer = () => {
  return (
    <div className="contact-container bg-grey">
      <span className="div-title">Fale conosco</span>
      <div className="contact-form">
        <div id="sect1">
          <span>
            Fale conosco e retornaremos dentro de 24 horas.
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            Moacir Leal
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i>
            +55 778 800 900
          </span>
          <span>
            <i className="far fa-envelope"></i>
            sqdhouse.gmail.com
          </span>
        </div>
        <div className="sect2">
          <span>Contato</span>
          <input type="text" placeholder="endereço de e-mail" className="input-field" />
          <textarea name="" id="" placeholder="Comente"></textarea>
          <button className="contact-btn">Enviar</button>
        </div>
      </div>
    </div>
  );
}
