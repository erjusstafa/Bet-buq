import React, { useEffect, useState } from "react";
import "./style.scss";
import image from "../../images/images";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerApi, setFooterApi] = useState([]);

  const fullFooterHome = async () => {
    return await fetch(
      " https://backoffice-new.betbuq.com/Betbuq/pages/links?lang=en"
    )
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
                <FooterLinks F={F} />
                <FooterEnd F={F.result?.links} E={F} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Footer;

const FooterLinks = ({ F }) => {
  return (
    <div className="footer__links">
      {F &&
        Object.values(F.main).map((item, index) => {
          return (
            <h3 key={index}>
              {item.name}
              <div className="link__footer_link">
                {item.links.map((link, index) => {
                  return <a href={`pages/Main/${link.slug}`}>{link.title}</a>;
                })}
              </div>
            </h3>
          );
        })}
    </div>
  );
};

const FooterMain = ({ F }) => {
  return (
    <div className="big__link">
      <div className="content__link">
        {F &&
          Object.values(F).map(
            (M) =>
              M?.links &&
              Object.values(M?.links).map((L, indx) => (
                <p key={indx} className={L && "slug"}>
                  {L.title}
                </p>
              ))
          )}
      </div>
    </div>
  );
};

const FooterEnd = ({ F, E }) => {
  return (
    <div className="footer_end">
      <div className="end">
        <img src={image["logo"]} alt="" />
        <FooterMain F={E} />
        <div className="title">
          {F &&
            Object.values(F).map((E, indexKey) => (
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
