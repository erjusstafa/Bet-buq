import React, { useState, useEffect, Component, Fragment } from "react";
import allConfig from "../../config/allConfig";
import "./style.scss";
import { Link } from "react-router-dom";


function Promo() {
  const [promoApi, setPromoApi] = useState([]);

  const fetchPromo = async () => {
    let promo = "promotions?lang=en";
    const data = await fetch(`https://stagingbackoffice.playlogiq.com/${allConfig["skinName"]}/${promo}`)
      .then((res) => res.json())
      .then((data) => setPromoApi(data))
      .catch((err) => console.log(err));

    console.log(data);
  };

  useEffect(() => {
    fetchPromo();

  }, []);

  console.log("promo", promoApi);

  const [setId, setSetId] = useState({
    general: 9999,
    id: null,
    title: "",
    imageItem: null,
    slugItem: null
  });

  const handleClickID = (setId, name, image, slug) => {
    setSetId({ id: setId, title: name, imageItem: image, slugItem: slug });
  };

  return (
    <div className="promo-wrapper">
      <div className="promo-wrapper-max">
        <div className="navigation-container">
          <div className="navigation-container-wrapper">
            {Object.values(allConfig.NavigationWrapper || []).map((N, index) => (
              <Link key={index} className={N.text.toLowerCase().replace(" ", "-")} to={N.link}>
                {N.text}
              </Link>
            ))}
          </div>
          <span>
            <i className="fas fa-question" />
            Help
          </span>
        </div>
        <div className="promotion">
          <div className="promotion__max">
            {Object.values(promoApi.promotions || []).map((P, index) => {
              return (
                <div className="grid-promo" key={index}>
                  <div className="tabs-promo">
                    <a href onClick={() => setSetId({ general: 9999 })}>
                      <p className={setId.general === 9999 ? "general " : "general"}
                      >
                        {P["name"]}{" "}
                      </p>
                    </a>
                    {Object.values(P["posts"] || []).map((T) => (
                      <a /* href={"/pages/promos/general/" + T.slug} */ key={T.id} onClick={() => handleClickID(T.id, T.title, T.image, T.slug)}>
                        <p className={setId.id === T.id ? "active" : ""}>
                          {T.title}
                        </p>
                      </a>
                    ))}
                  </div>
                  <PromoItem
                    index={index}
                    P={P}
                    setId={setId.id}
                    title={setId.title}
                    general={setId.general}
                    imageItem={setId.imageItem}
                    slug={setId.slugItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Promo;

class PromoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*   data: [] */
    };
  }
  /* 
    componentDidMount() {
      fetch(`https://stagingbackoffice.playlogiq.com/Betbuq/promotions/general/${this.props.slug}?menu=false&lang=en`)
        .then(res => res.json())
        .then(data => this.setState({ data: data }))
        .catch((error) => console.log(error));
    } */

  render() {
    console.log("SSSSluggggg", this.state.data);

    return (
      <Fragment>
        {this.props.setId ? (
          <div className="subtitle">
            <p
              className={
                this.props.title ?
                  `subtitle-item active ${this.props.title
                    .toLowerCase()
                    .replace(" ", "-")
                    .split("-")[0]}`
                  : ""
              }
            >
              {this.props.title}
            </p>
            <img src={this.props.imageItem} alt="" />
          </div>
        ) : (
          <div key={this.props.index} className="post-slot">
            {Object.values(this.props.P["posts"] || []).map(M => (
              <div className="card-item" key={M.id}>
                <div className="card" >
                  <div className="text-logo" >
                    <img src={M.image} alt="" />
                    <div className="slug-subtittle">
                      <span id="paragraph-promo">
                        <p>{M.title.split("-")[0]}</p>
                        <p>{M.sub_title}</p>
                      </span>
                      <a /* href={"/pages/promos/general/" + M.slug} */ id="read-more">Read More</a>
                    </div>
                  </div>
                </div>
                <p>{M.title}</p>
              </div>
            ))}
          </div>
        )
        }
      </Fragment>
    );
  }
}
