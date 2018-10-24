import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Fade } from '@material-ui/core';

const style = require('./gameScreen.css');

export default class GameScreen extends Component {

    render(){

        console.log('props',this.props);
        if(!this.props.vertice){
            return <div>Aguarde...</div>
        }

        const {isChangingVertice, vertice} = this.props;


        const img = require(`../../${vertice.img}`);


        if(vertice.arestas.length < 1){
            return(
                <div className={style.component}>
                    <div className='container'>
                        <div className='content finalScreen'>
                            <div className='description-scene finalScreen'>
                                {vertice.text}
                                <img alt='img descretiva' src={img} />
                            </div>
                        <p><Link to='/' onClick={() => this.props.SelectStory(1)} className="start"> Inicio </Link></p>
                        </div>
                    </div>
                </div>
            );
        }

        return(
            <Fade in={isChangingVertice} timeout={{enter: 500}} >
                <div className={style.component}>
                    <div className='container'>
                        <div className='content'>
                            <div className='description-scene'>
                                {vertice.text}
                                <img alt='img descretiva' src={img} />
                            </div>
                            <div className='content-options'>
                                <div className='options'>
                                {vertice.arestas.map((aresta, index) => {
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
            </Fade>
        );
    }
}