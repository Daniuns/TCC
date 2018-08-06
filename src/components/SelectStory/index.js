import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import './App.css';

 const style = require('./selectStory.css');
 console.log('ae',style);

class SelectStory extends Component {

  constructor(){
    super();
    this.state = {selected: 0}
  }
  
  componentDidMount(){
    //this.props.selectStory(1);
  }

  selected(id){
    console.log(id);
    this.setState({selected: id});
    this.props.selectStory(id);
  }
  
  render() {
    if(!this.props){
      return <div>Carregando...</div>
    }
    
    return (
      <div className={style.component}>
        <div className='container'>
        <div className={'stories'}>
          {this.props.stories.map((story, index) => {
            const img = require(`../../${story.img}`);
            return(
              <div onClick={() => this.selected(story.id)} 
              key={index} 
              className={`story ${this.state.selected == story.id ? 'selected' : ''}`}>
                <h1>{story.title}</h1>
                {/* <div><img alt='crianças tirando sarro de uma criança' src={img} /></div> */}
                <p>{story.description}</p>
              </div>
            );
          })}
          </div>
        <Link className='btn-select' to={'/'}><Button variant="contained" color="primary">selecionar</Button></Link>
        </div>
      </div>
    );
  }
}

export default SelectStory;
