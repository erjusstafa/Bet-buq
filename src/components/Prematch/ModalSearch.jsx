import React, { Component } from "react";
import "./modal.scss";
class ModalSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      match: [],
    };
  }

  /*  async componentDidMount() {
   
           const url = "https://api-new.betbuq.com/schedina/suggest?json&l=en"
   
           const response = await fetch(url);
           const data = await response.json()
   
           this.setState({ match: data })
           console.log("match", this.state.match);
       } */
  render(props) {
    return (
      <>
        {this.props.modal && (
          <div className="modal-container-prematch">
            <i class="fas fa-sort-up" />
            <div
              className="close"
              onClick={() => {
                this.props.setModal(false);
              }}
            >
              <p>X</p>
            </div>
            <div className="data-search">
              {Object.values(this.props.allConfig["list"] || {})
                .filter((E) =>
                  E.toLowerCase().includes(this.props.value.toLowerCase())
                )
                .map((E) => (
                  <>
                    {/*  {Object.values(this.props.allConfig["info"] || {}).map(
                      (D) => (
                        <>
                          {" "}
                          <p>{D.desc_palinsesto}</p>-<p>{D.desc_sport}</p>
                          {console.log("DD", D)}
                        </>
                      )
                    )} */}

                    {this.props.allConfig["list"].length <= 0 ? (
                      <span>nuk ka te dhena</span>
                    ) : (
                      <p>{E}</p>
                    )}
                  </>
                ))}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ModalSearch;
