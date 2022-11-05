import {useState} from "react";
import InfoToolTip from "./InfoToolTip";

const Login = ({onLogin, isCorrectly, isOpen, onClose}) =>{
    const initValues = {
        email: '',
        password: '',
    }

    const [state, setState] = useState(initValues)

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

        onLogin(password, email)
            .then(() => {
                setState(initValues)
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
                <h1 className="auth__title">Вход</h1>
                <form className="auth__form">
                    <input name='email' className="auth__input" type="email" placeholder="Email" value={state.email} onChange={handleChange}/>
                    <input name='password' className="auth__input" type="password" placeholder="Пароль" value={state.password} onChange={handleChange}/>
                    <button className="auth__submit" type="submit" onClick={handleSubmit}>Войти</button>
                </form>
            </div>
            <InfoToolTip isCorrectly={isCorrectly} isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

export default Login