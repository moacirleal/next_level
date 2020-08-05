import React from "react";
import { Link } from 'react-router-dom'; //importar Link para que a página não recarregue novamnete
import './styles.css';
import backIcon from '../../assets/images/icons/back.svg'; //ícone de voltar
import logoImg from '../../assets/images/logo.svg'; //logo

interface PageHeaderProps {
    title: string;

}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;