import React, { useEffect, useState } from 'react'
import "./style.css"

const Footer = () => {
    const [footerApi, setFooterApi] = useState([])


    const fullFooterHome = async () => {
        return await fetch(" https://content.betbuq.com/pages/links?lang=pt")
            .then((res) => res.json())
            .then(data => setFooterApi(data))

    }


    useEffect(() => {
        fullFooterHome();
    })


    console.log("footerApi", footerApi);

    return (
        <div className="footer">
            <div className="footer__max">
                {
                    footerApi && Object.values(footerApi).map((F, index) => <FooterMain F={F} index={index} />)
                }
            </div>
        </div>
    )
}
export default Footer



const FooterMain = ({ F, index }) => {
    return (
        <div className="big__link" >
            {
                F.main && Object.values(F.main).map((m, index) => (
                    <div className="content" key={index}>
                        <h2> {m.name}</h2>
                        <ContentFooterLink main={F.main} index={index} />
                    </div>
                ))
            }
        </div>
    )
}

const ContentFooterLink = ({ main, index }) => {
    return (
        <div >
            {
                main.link && Object.values(main.link).map(L => (
                    <h2>   {console.log("main", main)}
                    </h2>
                ))
            }
        </div>
    )
}