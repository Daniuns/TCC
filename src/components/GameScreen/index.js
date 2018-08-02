import React, { Component } from 'react';

const style = require('./gameScreen.css');

export default class GameScreen extends Component {
    render(){

        if(!this.props){
            return <div>Aguarde...</div>
        }
        return(
            <div className={style.component}>
            <div className='container'>
                <div className='content'>
                <div className='description-scene'>
                    {this.props.vertice.text}
                </div>
                <div className='content-options'>
                    <div className='options'>
                    {this.props.vertice.arestas.map((aresta, index) => {
                        return(
                            <p onClick={() => this.props.nextVertice(aresta.destino)} key={index}>
                                {aresta.text}
                            </p>
                        );
                    })}
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}