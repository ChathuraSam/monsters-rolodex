import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor() {
    super()

    this.state = {
      monsters:[]
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => this.setState({monsters:json}))
  }

  render() {
    return(
      <div>
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }
}



export default App;
