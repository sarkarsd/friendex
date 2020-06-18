import React, { Component } from 'react';
import CardList from './CardList.js';
// import {cats} from './cats.js';
import SearchBox from './searchBox.js';
import Scroll from './Scroll.js'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      cats : [],
      searchfield : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({cats: users}))
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
    if (!this.state.cats.length){
      return <h1><strong>LOADING....</strong></h1>
    }
    else{
      return (
        <div className='tc'>  
          <h1 className='f1'>Friendex</h1>
          <SearchBox searchChange={this.onsearchChange}/>
          <Scroll>
            <CardList cats={filteredCats} />
          </Scroll>       
        </div>
      );
    }  
  }  
}


export default App;
