import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './App.css';

const style = require('./mainScreen.css');

class MainScreen extends Component {
  
  componentDidMount(){
    //this.props.selectStory(1);
  }
  
  render() {
    if(!this.props.story){
      return <div>Carregando...</div>
    }
    const img = require(`../../${this.props.story.img}`);

    return (
      <div className={style.component}>
        <div className='App'>
          <div className="main-container">
            <div className="begin-stories">
              <div className="btn-options">
                <Link to='/start'><p>Iniciar</p></Link>
                <Link to='/stories'>Histórias</Link>
              </div>
            </div>

            <div className="title-description">
              <h1>{this.props.story.title}</h1>
              <div className="photo">
                <img alt='crianças tirando sarro de uma criança' src={img} />
              </div>
              <div className="description">
                <p>{this.props.story.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainScreen;
