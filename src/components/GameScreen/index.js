import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const style = require('./gameScreen.css');

export default class GameScreen extends Component {
    render(){

        if(!this.props){
            return <div>Aguarde...</div>
        }

        const img = require(`../../${this.props.vertice.img}`);

        if(this.props.vertice.arestas.length < 1){
            return(
                <div className={style.component}>
                    <div className='container'>
                        <div className='content finalScreen'>
                            <div className='description-scene finalScreen'>
                                {this.props.vertice.text}
                                <img alt='img descretiva' src={img} />
                            </div>
                        <Link to='/' onClick={() => this.props.SelectStory(1)} className="start"> Inicio </Link>
                        </div>
                    </div>
                </div>
            );
        }

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
                        
                    </div>
                </div>
            </div>
        );
    }
}