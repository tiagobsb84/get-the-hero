import React from 'react';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className='content'>
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>     
                </section>
            
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="WhatsApp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 80}} />
                    </div>

                    <button className="button" type="submit">Cadastra</button>
                </form>
            </div>
        </div>
    )
}