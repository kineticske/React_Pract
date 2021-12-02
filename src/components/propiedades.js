import React, { Component } from 'react';

export default class Propiedades extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }
    }

    render() {
        return (
            <>
            <h1>Propiedades</h1>
            <p> {this.state.contador}</p>
            </>
        )
    }

}