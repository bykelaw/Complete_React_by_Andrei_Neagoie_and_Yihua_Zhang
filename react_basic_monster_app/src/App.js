import React, {
  Component
} from 'react'
import './App.css';
import CardList from './components/CardList';


class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    }
    
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>  this.setState({ monsters: users })
      )
    .catch(
    e => console.log(e)
        )
  }
  render() {
  const changeHandler = (e)=> {
    this.setState({searchInput:e.target.value})
  }
    const { monsters, searchInput } = this.state;

    const filteredArray = monsters.filter(
      monster => monster.name.toLowerCase().includes(
        searchInput.toLocaleLowerCase()
      )
    )
      return (
        <div className="App">
          <input
            type="search"
            onChange={e=>changeHandler(e) }
            placeholder="search monster" />
      <CardList array={filteredArray}/>
    </div>
  );
  }
}







export default App;
