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
                .filter((E) => E.toLowerCase().includes(this.props.value.toLowerCase()))
                .map((E) => (this.props.allConfig["list"].length < 1 ? <span>nuk ka te dhena</span> : <p>{E}</p>))}
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ModalSearch;
