import React from 'react';
import '../styles/ecommLogin.css'; // Assicurati di importare il file CSS qui
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const navigazione = () => {
        navigate('/registrati')
    }

    const navigazioneHome = () => {
        navigate('/')
    }
    return (
        <div className='body'>
            <div className='contBTNHome'>
            <button className='BTN' onClick={navigazione}>Registrati</button>
            <button className='BTN' onClick={navigazioneHome}>Principale</button>
            </div>
            <div className='containerLogin'>
                <div>
                    <h1 className='title'>Accedi</h1>
                </div>
                <div className='containerInput'>
                    <input type="email" name='email' placeholder='Inserisci e-mail' />
                    <input type="password" name='password' placeholder='Inserisci password' />
                </div>
                <div className='containerButtonAccedi'>
                    <button>
                        Accedi
                    </button>
                </div>
                <p className='passForgot'>Password Dimenticata</p>
            </div>
        </div>
    );
}

export default Login;
