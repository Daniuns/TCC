import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './App.css';

 const style = require('./selectStory.css');
 console.log('ae',style);

class SelectStory extends Component {
  
  componentDidMount(){
    //this.props.selectStory(1);
  }
  
  render() {
    if(!this.props){
      return <div>Carregando...</div>
    }
    
    return (
      <div className={style.component}>
        <div className='container'>
          {console.log(this.props)}
          {this.props.stories.map((story, index) => {
            const img = require(`../../${story.img}`);
            return(
              <div onClick={() => this.props.selectStory(story.id)} key={index} className='story' style={{cursor: 'pointer'}}>
                <h1>{story.title}</h1>
                {/* <div><img alt='crianças tirando sarro de uma criança' src={img} /></div> */}
                <p>{story.description}</p>
              </div>
            );
          })}
        </div>
        <Link to={'/'}><button>selecionar</button></Link>
      </div>
    );
  }
}

export default SelectStory;
