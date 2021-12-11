import React, {Component} from 'react';

export default class Reloj extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new Date().toLocaleTimeString() //esto si influye en el renderizado
        }

        this.temporizador=null; //una var a usar 
    }

    TicTac = ()=>{
        this.temporizador =setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString() //actualizandolo cada 1 segundoS
            })
        },1000);
    }

    Iniciar =()=>{
        this.TicTac();
        console.log('iniciar')
    }

    Detener = ()=>{
        clearInterval(this.temporizador); //apaga el ticTac que se ejecuta cada 1s
        console.log('Detener')
    }


    render(){
        return (
            <>
                <h1>Reloj</h1>
                <h3>{this.state.hora}</h3>
                <button onClick={this.Iniciar}>Iniciar</button>
                <button onClick={this.Detener}>Detener</button>
            </>
        )
    }

}