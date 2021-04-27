import React, { useState } from 'react';
import logo from '../../../logo.svg'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContenIndex from '../../organims/content-index/content-index';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import ContentIndexDesing from '../../organims/content-index-desing/content-index-desing';

const Index = props => {
    const [style, setStyle] = useState(true);
    return ( 
        <>
            <Helmet>
            <title>{"Anderson Castaño"}</title>
                <meta name="title" content={"Anderson Castaño"} />
                <meta name="description" content="Curriculum de presentacion de Anderson Castaño" />
                <meta property="og:title" content={"Anderson Castaño"} />
                <meta property="og:image" content={logo} />
                <meta property="og:description" content="Description for the react-helmet section" />
                {/* <meta property="og:url" content={"https://bucard.co.il/digitalCard/" + this.state.card.ShortID} /> */}
            </Helmet>
            <div className="p-index">
                <div className="p-index-sw">
                    <input type="checkbox" name="sw" id="sw-desing" className="p-index-sw-input" onClick={ () => style ? setStyle(false) : setStyle(true) }/>
                    <label htmlFor="sw-desing" className="p-index-sw-label">
                        <span>
                            <FontAwesomeIcon className="fas fa-power-off" icon={faPowerOff} />
                            <FontAwesomeIcon className="fas fa-check" icon={faCheck} />
                        </span>
                    </label>
                </div>
                <div className={style ? "p-index-container p-index-container-gray" : "p-index-container p-index-container-white"}>
                    {style ? <ContenIndex></ContenIndex> : <ContentIndexDesing></ContentIndexDesing> }
                </div>
            </div>
        </>
     );
}
 
export default Index;