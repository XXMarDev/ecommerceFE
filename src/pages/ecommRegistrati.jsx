import { useNavigate } from 'react-router-dom';
import '../styles/ecommRegistrati.css'

function Registrati() {
const navigate = useNavigate()

const handleNavigate = () => {
    navigate('/accedi')
}

const handleNavigateHome = () => {
    navigate('/')
}
    return(
        <div className="body">
            <div className='contBTNHome'>
            <button className='BTN' onClick={handleNavigate}>Accedi</button>
            <button className='BTN' onClick={handleNavigateHome}>Principale</button>
            </div>
            <div className="containerRegistrati">
                <h1 className='title'>Registrati</h1>
                <div className='containerInputReg'>
                    <input type="text" id='username' placeholder='Username'/>
                    <div className='containerEmailInput'>
                        <input type="email" placeholder='E-mail' id='register' />
                    </div>
                    <div>
                        <input type="password" id="register" placeholder='Create a password'/>
                        <input type="password" id='register' placeholder='Confimr Password' />
                    </div>
                </div>
                <div className='containerButtonRegistrati'>
                    <button>
                        Registrati
                    </button>
                </div>
                <p className='passForgot'>Password Dimenticata</p>
            </div>
        </div>
    )
}

export default Registrati;