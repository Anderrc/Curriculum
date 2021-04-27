import React from 'react';
import './content-index.scss';

const ContenIndex = props => {
    return ( 
        <div className="o-content-index">
            <h1>
                Anderson Castaño {"{"}
            </h1>
            <div className="o-content-index-comments">
                <p>{'//'} Desarrollador Full Stack</p>
                <p>{'//'} Lenguajes mas usados: JavaScript, PHP</p>
            </div>
            <div className="o-content-index-secctiones">
                <div className="o-content-index-secctiones-section">
                    <h2>Sobre mi{"{"}</h2>
                
                    <p>Perfil: 'Desarrollador full stack, apacionado de los video juegos y las series',</p>

                    <h3>Contacto{"{"}</h3>
                    <div className="o-content-index-secctioones-section-subsection">
                        <p>Telefono: '3113735915',</p>
                        <p>Ciudad: 'Cocorná',</p>
                        <p>Correo: 'andercc2880@gmail.com'</p>
                    </div>
                    <span className="h3-cierre">{"}"}</span>
                    <h3>Redes{"{"}</h3>
                    <div className="o-content-index-secctioones-section-subsection">
                        <p>GitHub: <a href="https://github.com/Anderrc" target="_blank" rel="noopener noreferrer">'https://github.com/Anderrc'</a></p>  
                    </div>
                    <span className="h3-cierre">{"}"}</span>
                    <span className="h2-cierre">{"}"}</span>
                </div>

                <div className="o-content-index-secctiones-section">
                    <h2>Educacion{"{"}</h2>
                    <p>Tecnico en sistemas: 'Cetasdi, 2015'</p>
                    <p>Tecnico en programación de sofware: 'SENA, 2018',</p>
                    <p>Tecnologia en analisis y desarrollo de sistemas de la informacion: 'Sena, 2021',</p>
                    <span className="h2-cierre">{"}"}</span>
                </div>

                <div className="o-content-index-secctiones-section">
                    <h2>Experiencia{"{"}</h2>
                    <h3>Brokers 2018{"{"}</h3>
                    <div className="o-content-index-secctioones-section-subsection">
                        <p>Contexto: 'Desarrollo de un sitio web para el alquiler, venta y cambio de propiedades',</p>
                        <p>Duracion: '2 Meses',</p>
                        <p>Desarrollo frond-end: 'Html, Css3, jquery, bootstrap',</p>
                        <p>Desarrollo backend: 'PHP y MySql estructurado'</p>
                    </div>
                    <span className="h3-cierre">{"}"}</span>
                    <h3>SENA - UniVolco 2018{"{"}</h3>
                    <div className="o-content-index-secctioones-section-subsection">
                        <p>Contexto: 'Desarrollo de aplicativo web encargado del registro de acarreos y venta de material en una cooperativa de volquetas',</p>
                        <p>Duracion: '6 Meses',</p>
                        <p>Desarrollo frond-end: 'Html, Css3, jquery, bootstrap',</p>
                        <p>Desarrollo backend: 'PHP y MySql estructurado'</p>
                    </div>
                    <span className="h3-cierre">{"}"}</span>
                    <h3>SENA - Aventura Cocorná 2019{"{"}</h3>
                    <div className="o-content-index-secctioones-section-subsection">
                        <p>Contexto: 'Desarrollo de un aplicativo web donde se almacenaban las bitacoras de vuelo de vuelos en parapente, el registro y rotacion de empleados',</p>
                        <p>Duracion: '8 Meses',</p>
                        <p>Desarrollo frond-end: 'Html, Css3, jquery, bootstrap',</p>
                        <p>Desarrollo backend: 'PHP y MySql estructurado'</p>
                    </div>
                    <span className="h3-cierre">{"}"}</span>
                    <h3>Pragma 2020{"{"}</h3>
                    <div className="o-content-index-secctioones-section-subsection">
                        <p>Desarrollo de micro servicios: 'Crear diferentes micro servicios en lenguajes como: Spring boot, serverless.js',</p>
                        <p>Desarrollo front-end: 'react y angular'</p>
                        <p>Administracion de CMS: 'Contentful'</p>
                        <p>Desarrollo sitio web: 'Gatsby, react y Contentful' </p>
                    </div>
                    <span className="h3-cierre">{"}"}</span>
                    <span className="h2-cierre">{"}"}</span>
                </div>

                <div className="o-content-index-secctiones-section">
                    <h2>Habilidades{"{"}</h2>
                    <p>PHP: 'Intermedio'</p>
                    <p>{'JavaScript'}: 'Intermedio'</p>
                    <p>Html: 'Avanzado'</p>
                    <p>CSS3: 'Intermedio'</p>
                    <p>Node js: 'Intermedio'</p>
                    <p>Java: 'Basico'</p>
                    <p>Docker: 'Basico'</p>
                    <p>Git: 'Intermedio'</p>
                    <p>MySql: 'Intermedio'</p>
                    <h2>{"}"}</h2>
                </div>
            </div>
            <span className="h1-cierre">{"}"}</span>
        </div>
     );
}
 
export default ContenIndex;