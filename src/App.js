import React, { Component } from 'react';
import CardList from './CardList.js';
import {cats} from './cats.js';
import SearchBox from './searchBox.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      cats : cats,
      searchfield : ''
    }
  }

  onsearchChange=(event) =>{
    this.setState({searchfield:event.target.value})
    console.log(event.target.value) 
    }
  render(){
   // The cat argument is a reference to the current element in the array as filter() checks it against the condition.    
    const filteredCats = this.state.cats.filter((cat) =>{
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>  
        <h1 className='f1'>Friendex</h1>
        <SearchBox searchChange={this.onsearchChange}/>
        <CardList cats={filteredCats} />
      </div>
    );
  }  
}


export default App;
