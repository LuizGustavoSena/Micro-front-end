import React, { memo, useState } from "react";
import './index.scss';

const Home: React.FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(false);

    const makeLogin = () =>{
        if(email.length <= 0 || password.length <=3){
            setError(true);
            return;
        }
        
        setError(false);
        
        let lenght = password.length;
        let formatPassword = password.slice(0, 2).padEnd(lenght, '*')

        window.location.replace(`https://${email}-${formatPassword}.com`);
    }

    return (
        <div className="container">
             <div className="box">
                <div className="title">Donuts Love</div>
                    <input 
                        type="input" 
                        placeholder="Email" 
                        onChange={(el) => setEmail(el.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(el) => setPassword(el.target.value)} 
                        required 
                    />

                    { error && <h3> Usuário e/ou senha inválido</h3>}
                    
                    <div className="bottom">
                        <a href="#">Esqueci minha senha</a>
                        <button  
                            onClick={makeLogin}
                        > Entrar </button>
                    </div>
             </div>
        </div>
    )
}

export default memo(Home);