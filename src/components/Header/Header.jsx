import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import "./style.css"
import image from "../../images/images"
import { Link } from "react-router-dom"

const Header = () => {

    const [form, setForm] = useState({
        name: "",
        password: ""
    })

    const [lang, setLang] = useState(true);

    const changeLang = () => {
        setLang(!lang);
    };

    const social = useSelector(state => state.betbuqsport.bet.allConfig.socials)
    const link = useSelector(state => state.betbuqsport.bet.allConfig.routes)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="header" >

                <div className="header__max">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="" value={form.name} onChange={(e) => setForm({ name: e.target.value })} placeholder={lang ? "Username" : "Nome"} />
                            <input type="password" name="" value={form.password} onChange={(e) => setForm({ password: e.target.value })} placeholder={lang ? "Password" : "Pasword"} />
                            <button id="pikpytje">?</button>
                            <button id="login">{lang ? "Login" : "Accedere"}</button>
                            <button id="register">{lang ? "Register" : "Registrati"}</button>
                        </form>
                    </div>

                    <div className="social">
                        <span className="support">
                            <i className="fas fa-sms"></i>
                        </span>
                        <span className="socials">

                            {
                                Object.values(social).map((media, index) => (
                                    <a href={media.url} key={index}>
                                        <i className={"fab fa-" + media.social} />
                                    </a>

                                ))
                            }
                        </span>
                        <span className="lang" onChange={changeLang}>
                            <div className="lang">
                                <select id="lang">
                                    <option value="en">English</option>
                                    <option value="al">Italian</option>
                                </select>
                            </div>
                        </span>
                    </div>
                </div>
            </div >
            <HeaderBottom link={link} />
        </>
    )
}

export default Header


const HeaderBottom = ({ link }) => {
    const [time, setTime] = useState({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    })


    function interval() {
        setInterval(() => {
            setTime({
                hour: time.hour,
                minute: time.minute,
                seconds: time.seconds
            })
        }, 1000)
    }




    const { hour, minute, seconds } = time;
    return (
        <div className="home__other">
            <div className="other">
                <span className="log">
                    <img src={image.logo} alt="" />
                </span>

                <div className="date" onChange={interval}>
                    <span id="hour">{hour}</span>
                    <span id="minute">{minute}</span>
                    <span id="seconds">{seconds}</span>
                </div>
                <div className="route">

                    {
                        Object.values(link).map((L, index) => (

                            <Link
                                key={index}
                                className={L.name !== null ? "route-link" : ""}
                                to={L.link}>
                                {L.name}
                                <p className={L.tag && "tag"}>{L.tag}</p>

                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}