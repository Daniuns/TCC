import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const style = require('./gameScreen.css');

export default class GameScreen extends Component {
    render(){

        if(!this.props){
            return <div>Aguarde...</div>
        }

        const img = require(`../../${this.props.vertice.img}`);

        return(
            <div className={style.component}>
                <div className='container'>
                    <div className='content'>
                        <div className='description-scene'>
                            {this.props.vertice.text}
                            <img alt='img descretiva' src={img} />
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
                        {this.props.vertice.arestas.length < 1 ? <Link to='/' onClick={() => this.props.SelectStory(1)}> Inicio </Link> : '' }
                    </div>
                </div>
            </div>
        );
    }
}