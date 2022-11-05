import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import InfoToolTip from "./InfoToolTip";

const Register = ({onRegister, isCorrectly, onClose, isOpen}) =>{
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleChange = e => {
        const {name, value} = e.target;

        setState(old => ({
            ...old,
            [name]: value,
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();

        const {password, email} = state;

        if (!password || !email) return;

        onRegister(password, email)
            .then(()=>{
                navigate('/sign-in')
            })
            .catch(err => {
                console.log(err);

                setState(old => ({
                    ...old
                }))
            });
    }

    return (
        <>
            <div className="auth">
                <h1 className="auth__title">Регистрация</h1>
                <form className="auth__form">
                    <input name='email' className="auth__input" type="email" placeholder="Email" value={state.email || ''} onChange={handleChange}/>
                    <input name='password' className="auth__input" type="password" placeholder="Пароль" value={state.password || ''} onChange={handleChange}/>
                    <button className="auth__submit" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
                </form>
                <p className="auth__text">Уже зарегистрированы? <Link to="/sign-in" className="auth__text auth__text_login">Войти</Link></p>
            </div>
            <InfoToolTip isCorrectly={isCorrectly} isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

export default Register