import React, { Component } from "react";

class Objetos extends Component {
  state = { objetos: this.getObjetos() };
  //Handlers (Create-Read1-Update-Delete)
  handleCreate = (objeto) => {
    console.log(objeto);
    /* create object with object form function*/
    const objetos = this.state.objetos.push(objeto);
    this.setState({ objetos });
  };
  handleRead1 = (objeto) => {
    console.log(objeto);
    /* fill form with object function*/
  };
  handleUpdate = (objeto) => {
    console.log(objeto);
    /* update object with form object function*/
  };
  handleDelete = (objeto) => {
    console.log(objeto);
    const objetos = this.state.objetos.filter(
      (o) => o._id !== objeto._id
    ); /* != or !==*/
    this.setState({ objetos });
  };
  render() {
    return <div>{/*form*/}</div>;
  }
  //domie REST API code http://pagina.com/api/objetos:
  getObjetos() {
    return [];
  }
  //insert
  postObject() {}
  //getOne
  //delete
}

export default Objetos;
