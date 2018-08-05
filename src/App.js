import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import GameScreen from './components/GameScreen';
// import './App.css';
import SelectStory from './components/SelectStory/index';

const stories = require("./historias.json");

class App extends Component {

  
  componentDidMount(){
    const story =  stories.filter(story => story.id === 1 );
    this.setState({story: story[0]});
    this.setState({vertice: story[0].vertices[0]});
  }
  
  selectStory = (number) => {
    const story =  stories.filter(story => story.id === number );
    this.setState({story: story[0]});
    this.setState({vertice: story[0].vertices[0]});
  }

  nextVertice = (destiny) => {
    const story = Object.keys(this.state.story).map(i => this.state.story[i])
    const vertice = story[4].filter(story => story.value === destiny)[0];
    this.setState({vertice});
  }

  render() {
    if(!this.state){
      return(
        <div>...</div>
      );
    }
    const {vertice, story} = this.state;
    return (
      <div style={{height: '100%'}}>
      {console.log(this.state.vertice)}
         <Router>
              <Switch>
                <Route exact path='/' render={() => <MainScreen selectStory={this.selectStory} story={story}/>} />
                <Route path='/start' render={() => <GameScreen vertice={vertice}  nextVertice={this.nextVertice}/>} selectStory={this.selectStory}/>
                <Route path='/stories' render={() => <SelectStory selectStory={this.selectStory} stories={stories}/>}/>
              </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
