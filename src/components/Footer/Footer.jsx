import React, { useEffect, useState } from "react";
import "./style.css";
import image from "../../images/images"
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

    console.log("footerApi", footerApi);

    return (
        <>
            <div className="footer">
                <div className="footer__max">
                    {footerApi &&
                        Object.values(footerApi).map((F, index) => (
                            <>
                                <FooterMain F={F} index={index} />
                                <FooterEnd F={F} />
                            </>
                        ))}
                </div>
            </div>



        </>
    );
};
export default Footer;

const FooterMain = ({ F, index }) => {
    return (
        <div className="big__link">
            {F?.main &&
                Object.values(F?.main).map((M, index) => (
                    <div className="content" key={index}>
                        <h2 className={M && "name"}> {M?.name}</h2>
                        {M?.links &&
                            Object.values(M?.links).map((L) => (
                                <p className={L && "slug"}>{L.title}</p>
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
                <Link className="title">
                    {
                        Object.values(F?.footer?.links).map(E => (
                            <h2>{E.title}</h2>
                        ))
                    }
                </Link>
                <p>
                    Al acceder, seguir utilizando o navegar a través de este sitio, acepta que utilicemos
                    ciertas cookies del navegador para mejorar su experiencia con nosotros. Solo utilizamos
                    Cookies que mejorarán su experiencia con nosotros y no interferirán con su privacidad.
                    <br />
                    Consulte nuestra{" "}
                    <Link className="p">Política de cookies</Link>

                    para obtener más información sobre nuestro uso de cookies y cómo puede deshabilitar o
                    administrar su uso si lo desea.
                </p>
                <div className={image === null ? "nuk ka te imazhe" : "foot__img"}>
                    <img src={image["images"]} />
                    <img src={image["fund"]} alt="" />
                </div>
            </div>
        </div>
    )
}
