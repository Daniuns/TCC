import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';


// import './App.css';

 const style = require('./selectStory.css');

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
    window.history.back();
  }
  
  render() {
    if(!this.props){
      return <div>Carregando...</div>
    }
    
    return (
      <div className={style.component}>

        <div className='container'>
        <h1>Escolha uma História</h1>
        <div className={'stories'}>
          {this.props.stories.map((story, index) => {
            const img = require(`../../${story.img}`);
            return(
              <Grow
                in={true}
                style={{ transformOrigin: '0 0 0' }}
                {...(true ? { timeout: 1000 } : {})}
              >
                <Paper classes={{root: 'paper'}} >
                <div onClick={() => this.selected(story.id)} 
                key={index} 
                className={`story ${this.state.selected === story.id ? 'selected' : ''}`}>
                <Typography variant="headline" component="h1">
                  {story.title}
                </Typography>
                <Typography>
                  <div>
                    <img alt='crianças tirando sarro de uma criança' 
                    src={img}
                    className='img-theme' />
                  </div>
                  <p>{story.description}</p>
                </Typography>
                </div>
                </Paper>
              </Grow>
            );
          })}
          </div>
        {/* <Link className='btn-select' to={'/'}><Button variant="contained" color="primary">selecionar</Button></Link> */}
        </div>
      </div>
    );
  }
}

export default SelectStory;
