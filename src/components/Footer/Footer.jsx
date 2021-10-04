import React, { useEffect, useState } from "react";
import "./style.scss";
import image from "../../images/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerApi, setFooterApi] = useState([]);

  const fullFooterHome = async () => {
    return await fetch(" https://content.betbuq.com/pages/links?lang=pt")
      .then((res) => res.json())
      .then((data) => setFooterApi(data))
      .catch((err) => console.log("has error bro "));
  };

  useEffect(() => {
    fullFooterHome();
  }, []);

  return (
    <>
      <div className="footer">
        <div className="footer__max">
          {footerApi &&
            Object.values(footerApi).map((F, index) => (
              <div key={index}>
                <FooterMain F={F} />
                <FooterEnd F={F} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Footer;

/* class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerApi: [],
    };
  }

  componentDidMount() {
    const fullFooterHome = async () => {
      return await fetch(" https://content.betbuq.com/pages/links?lang=pt")
        .then((res) => res.json())
        .then((data) => this.setState(data))
        .catch((err) => console.log("has error bro "));
    };
    return fullFooterHome;
  }
  render() {
    return (
      <div className="footer">
        <div className="footer__max">
          {this.props.footerApi &&
            Object.values(this.props.footerApi).map((F, index) => (
              <div key={index}>
                <FooterMain F={F} />
                <FooterEnd F={F} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Footer;
 */
const FooterMain = (props) => {
  return (
    <div className="big__link">
      {props.F?.main &&
        Object.values(props.F?.main).map((M, ind) => (
          <div className="content" key={ind}>
            <h2 className={M && "name"}> {M?.name}</h2>
            {M?.links &&
              Object.values(M?.links).map((L, indx) => (
                <p key={indx} className={L && "slug"}>
                  {L.title}
                </p>
              ))}
          </div>
        ))}
    </div>
  );
};

const FooterEnd = ({ F }) => {
  return (
    <div className="footer_end">
      <div className="end">
        <img src={image["logo"]} alt="" />
        <div className="title">
          {Object.values(F?.footer?.links).map((E, indexKey) => (
            <Link key={indexKey} to={E.slug || "/"} className={E && E.slug}>
              <h2
                style={{
                  color: "#52a6af",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
                {E.title}
              </h2>
            </Link>
          ))}
        </div>
        <p>
          Al acceder, seguir utilizando o navegar a través de este sitio, acepta
          que utilicemos ciertas cookies del navegador para mejorar su
          experiencia con nosotros. Solo utilizamos Cookies que mejorarán su
          experiencia con nosotros y no interferirán con su privacidad.
          <br />
          Consulte nuestra{" "}
          <Link to="/" className="p">
            Política de cookies
          </Link>
          para obtener más información sobre nuestro uso de cookies y cómo puede
          deshabilitar o administrar su uso si lo desea.
        </p>
        <div className={image === null ? "nuk ka te imazhe" : "foot__img"}>
          <img src={image["images"]} alt={""} />
          <img style={{ objectFit: "none" }} src={image["fund"]} alt={""} />
        </div>
      </div>
    </div>
  );
};
