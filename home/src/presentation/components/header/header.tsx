import React, { memo } from "react";

import './index.scss';

const Header: React.FC = () =>{

    return (
        <div className="container">
            <div className="left">
                <a href=''>Donuts love</a>
            </div>
            
            <div className="right"> 
                <a href='' className="option">Perfil</a>
                <a href='' className="option">Carrinho</a>
                <a href='' className="option">Configurações</a>
            </div>
        </div>
    )
}

export default memo(Header);
