import "./styles.css";
import React from "react";

export default class App extends React.Component {
  state = {
    contador: 0,
    fecha: new Date()
  };

  contar(op) {
    switch (op) {
      case "+":
        console.log("sumo 1");
        this.setState({ contador: this.state.contador + 1, fecha: new Date() });
        break;
      case "-":
        console.log("resto 1");
        this.setState({
          contador: this.state.contador - 1,
          fecha: new Date()
        });
        break;
      default:
        console.log("no hago nada");
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Una app con estado</h2>
        <p>Si presiona el boton 1 sumo, si presiona el boton 2 resto</p>
        <p>
          Ha presionado el boton <b>{this.state.contador}</b> veces
        </p>
        <p>{this.state.fecha.toTimeString()}</p>
        <button onClick={() => this.contar("+")}>Contar +1</button>
        <p>&nbsp;</p>
        <button onClick={() => this.contar("-")}>Contar -1</button>
      </div>
    );
  }
}
