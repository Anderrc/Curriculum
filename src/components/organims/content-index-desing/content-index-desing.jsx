import React from 'react';
import './content-index-desing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from'@fortawesome/free-brands-svg-icons';
import img from '../../../img/129639256_4965113970196224_4559618935238846929_n.jpg';

const ContentIndexDesing = props => {
    return ( 
        <div className="o-content-index-desing">
            <div className="o-content-index-desing-row ">
                <div className="o-content-index-desing-img-profile ">
                    <img src={img} alt=""/>
                </div>
                <div className=" o-content-index-desing-profile">
                    <h1>Anderson Castaño</h1>
                    <span className="sub-title">Full Stack Developer</span>
                    <p>
                        Hola mi nombre es Anderson, soy de Cocorná Antioquia, soy desarrollador full stack para web con experiencia en diferentes lenguajes.
                    </p>
                </div>
            </div>
            <div className="o-content-index-desing-row">
                <div className="o-content-index-desing-experience">
                    <h2 className="sub-title">Experiencia</h2>
                    <div className="o-content-index-desing-experience-content">
                        <span className="borde-inteno"> </span>
                        <div>
                            <p>- Brokers 2018(2 meses)</p>
                            <p>- SENA - UniVolco 2018 (6 meses)</p>
                            <p>- SENA - Aventura Cocorná 2019 (8 meses)</p>
                            <p>- Pragma 2020 (9 meses - en curso) </p>
                        </div>
                    </div>
                </div>
                <div className="o-content-index-desing-skill">
                    <h2 className="sub-title">Habilidades</h2>
                    <div className="o-content-index-desing-skill-content">
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-violet"> </span>
                            Html5
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-light-purple"> </span>
                            CSS3
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-gray "> </span>
                            JS
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-violetDark "> </span>
                            Java
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-blue "> </span>
                            React
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-blueDark"> </span>
                            PHP
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-green"> </span>
                            Node Js
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-violet"> </span>
                            Git
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-blueDark"> </span>
                            MySql
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-light-green"> </span>
                            Docker
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-green"> </span>
                            Gatsby
                        </span>
                        <span className="o-content-index-desing-skill-content-item">
                            <span className="muestra-color bg-t-gray"> </span>
                            Contentful
                        </span>
                    </div>
                </div>
            </div>
            <div className="o-content-index-desing-row">
                <div className="o-content-index-desing-education">
                    <h2 className="sub-title">Educación</h2>
                    <div className="o-content-index-desing-education-content">
                        <span className="borde-inteno"> </span>
                        <div>
                            <p>- Tecnico en sistemas Cetasdi 2015</p>
                            <p>- Tecnico en programación de sofware SENA 2018</p>
                            <p>- Curso desarrollo de aplicaciones con PHP SENA 2018</p>
                            <p>- Tecnologia en analisis y desarrollo de sistemas de la informacion SENA 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="o-content-index-desing-row">
                <div className="o-content-index-desing-contact">
                    <a href="mailto:andercc2880@gmail.com" target="_blank" rel="noopener noreferrer" className="o-content-index-desing-contact-link" >
                        <FontAwesomeIcon className="text-blue icon" icon={faEnvelopeOpenText} />andercc2880@gmail.com
                    </a>
                    <a href="https://github.com/Anderrc" target="_blank" rel="noopener noreferrer" className="o-content-index-desing-contact-link" >
                        <FontAwesomeIcon className="text-blue icon" icon={faGithubSquare} />github.com/Anderrc
                    </a>
                </div>
            </div>
        </div>
        
     );
}
 
export default ContentIndexDesing;