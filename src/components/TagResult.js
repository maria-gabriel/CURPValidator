import React, { Component } from "react";
import PropTypes from "prop-types";

export class TagResult extends Component {
    static propTypes = {
        resultados: PropTypes.array,
    }

    _renderResultados = () => {
        const { resultados } = this.props;
        const elementos = [];
      
        for (let clave in resultados) {
          const resultado = resultados[clave];
          const elemento = resultado ? (
            <div key={clave} className="notification is-success is-light p-2 mb-1">
              La CURP <strong>{clave}</strong> es válida
            </div>
          ) : (
            <div key={clave} className="notification is-danger is-light p-2 mb-1">
              La CURP <strong>{clave}</strong> no es válida
            </div>
          );
          elementos.push(elemento);
        }
        return elementos;
      }

    render() {
        return (
            this._renderResultados()
        )
    }
}