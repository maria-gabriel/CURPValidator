import React, { Component } from "react";
import { TagResult } from "./TagResult";
const curp = require("curp");

export class SearchForm extends Component {
  state = {
    inputValue: "",
    resultValue: false,
    dataValue: [],
  };

  _handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  _handleClick = (e) => {
    e.preventDefault();
    let inputValue = this.state.inputValue.split(",");
    let resultados = [];
    for (const element of inputValue) {
      resultados[element] = curp.validar(element.trim());
    }
    this.setState({ resultValue: true, dataValue: resultados });
  };

  _renderResult = () => {
    return <TagResult resultados={this.state.dataValue} />;
  };

  _handleReset = () => {
    this.setState({ inputValue: "", resultValue: false });
  };

  render() {
    return (
      <>
        <div className="field is-grouped column is-two-fifths p-0 pb-3">
          <div className="control is-expanded">
            <textarea className="textarea is-primary" value={this.state.inputValue} onChange={this._handleChange} placeholder="Ingrese CURP"></textarea>
          </div>
          <div className="field has-buttons">
          <button className="button is-primary" type="button" onClick={this._handleClick}>
              Validar
            </button>
            <button className="button is-info" type="button" onClick={this._handleReset}>
              Limpiar
            </button>
          </div>
        </div>
        {this.state.resultValue ? (
          <div className="control control-contents">{this._renderResult()}</div>
        ) : (
          <div className="notification is-warning is-light p-3">
            <strong>IMPORTANTE: </strong> Separar con <strong>COMA</strong> para más de una CURP
          </div>
        )}
      </>
    );
  }
}
