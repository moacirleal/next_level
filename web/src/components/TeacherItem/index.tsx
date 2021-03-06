import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/68063282?s=460&v=4" alt="Walter White" />
                <div>
                    <strong>Walter White</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiata das melhores tecnologias de química avançada.
                <br />
                <br />
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências.
            Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
            <footer>
                <p>
                    Preço por hora <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}