import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import image from "../../images/images";
import { Link } from "react-router-dom";
import allConfig from "../../config/allConfig";
import PopupLoginRegister from "../LoginRegister/PopupLoginRegister";

const Header = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  let languages = {
    en: "English",
    it: "Italian",
  };

  const [lang, setLang] = useState(true);

  const changeLang = () => {
    setLang(!lang);
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupRegister, setOpenPopupRegister] = useState(false);

  const handleChangePopup = () => {
    setOpenPopup(false);
    setOpenPopupRegister(false)
  };


  const social = useSelector(
    (state) => state.betbuqsport.bet.allConfig.socials
  );
  //const link = useSelector((state) => state.betbuqsport.bet.allConfig.routes);
  /*     const user = useSelector((state) => state.betbuqsport.bet.allConfig.login);
   */ const inputIcon = useSelector(
    (state) => state.betbuqsport.bet.allConfig.login
  );
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="header">
        <div className="header__max">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <span style={{ position: "relative" }}>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ name: e.target.value })}
                  placeholder={
                    lang
                      ? inputIcon.Name.placeholderEN
                      : inputIcon.Name.placeholderIT
                  }
                />
                <i className={inputIcon && inputIcon.Name.icon} />
              </span>
              <span style={{ position: "relative" }}>
                <input
                  type="password"
                  name=""
                  value={form.password}
                  onChange={(e) => setForm({ password: e.target.value })}
                  placeholder={
                    lang
                      ? inputIcon.Password.placeholderEN
                      : inputIcon.Password.placeholderIT
                  }
                />
                <i className={inputIcon && inputIcon.Password.icon} />
              </span>
              <button id="pikpytje">?</button>
              <button id="login" onClick={() => setOpenPopup(true)}>
                {lang ? "Login" : "Accedere"}
              </button>
              <button id="register" onClick={() => setOpenPopupRegister(true)}>{lang ? "Register" : "Registrati"}</button>
            </form>
          </div>
          {(openPopup || openPopupRegister) && (
            <PopupLoginRegister
              handleChangePopup={handleChangePopup}
              inputIcon={inputIcon}
              lang={lang}
              open={openPopup}
            />
          )}
          <div className="social">
            <span className="support">
              <i className="fas fa-sms"></i>
            </span>
            <span className="socials">
              {social &&
                Object.values(social).map((media, index) => (
                  <a href={media.url} key={index}>
                    <i className={"fab fa-" + media.social} />
                  </a>
                ))}
            </span>
            <span className="lang" onChange={changeLang}>
              <div className="lang">
                <select id="lang">
                  <option value="en">{languages.en || "English"}</option>
                  <option value="it">{languages.it || "Italian"}</option>
                </select>
              </div>
            </span>
          </div>
        </div>
      </div>
      <HeaderBottom />
    </>
  );
};

export default Header;

class HeaderBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: null,
      minute: null,
      seconds: null,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        hour: new Date().getHours().toLocaleString(),
        minute: new Date().getMinutes().toLocaleString(),
        seconds: new Date().getSeconds().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    let styleDate = {
      margin: "auto 5px",
      marginLeft: " 5px",
      height: "27px",
      width: "19px",
      background: "rgb(63, 64, 65)",
      display: "grid",
      placeItems: "center",
      fontWeight: "bolder",
      border: "1px solid rgb(82, 82, 82)",
    };

    let dotted = {
      height: "calc(100% - 1px)",
      backgroundColor: "#3c494e",
      fontWeight: "700",
      display: "grid",
      placeItems: "center",
      padding: "0 2px",
    };

    let dataOra = {
      display: "flex",
      margin: "auto 0",
    };
    return (
      <div className="home__other">
        <div className="other">
          <Link to="/" className="log">
            <img src={image.logo} alt="" />
          </Link>

          <div className="hour-top">
            <span className="top">
              <img src={image.topHours} alt="" />
            </span>
            <span className="before"></span>
            <div className="date">
              <div style={dataOra}>
                <p style={styleDate}>H</p>
                <span id="hour">
                  {this.state.hour < 10
                    ? parseInt("0") + this.state.hour
                    : this.state.hour}
                </span>
              </div>
              <span style={dotted}>:</span>
              <div style={dataOra}>
                <p style={styleDate}>M</p>
                <span id="hour">
                  {this.state.minute < 10
                    ? parseInt("0") + this.state.minute
                    : this.state.minute}
                </span>
              </div>
              <span style={dotted}>:</span>{" "}
              <div style={dataOra}>
                <p style={styleDate}>S</p>
                <span id="hour">
                  {this.state.seconds < 10
                    ? parseInt("0") + this.state.seconds
                    : this.state.seconds}
                </span>
              </div>
            </div>
            <span className="after"></span>
          </div>
          <div className="route">
            {Object.values(allConfig.routes).map((L, index) => (
              <Link
                key={index}
                className={L.name !== null ? "route-link" : ""}
                to={L.link}
              >
                {L.name}
                <p className={L.tag && "tag"}>{L.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
