import React, { memo } from "react";
import './index.scss';

const Home: React.FC = () => {
    
    return (
        <div className="container">
             <div className="box">
                <div className="title">Donuts Love</div>
                    <input type="input" className="form__field" placeholder="Email" required />

                    <input type="password" className="form__field" placeholder="Password" required />
                    <button> Entrar </button>
             </div>
        </div>
    )
}

export default memo(Home);