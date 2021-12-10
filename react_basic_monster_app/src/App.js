import React,{Component,useState,useEffect} from 'react'
import './App.css';
import CardList from './components/CardList';


// class App extends Component{
//   constructor() {
//     super();
//     this.state = {
//       monsters:[]
//     }
    
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users => {
//         console.log(users)
//         return this.setState({ monsters: users })
//       }
//       )
//     .catch(
//     e => console.log(e)
//         )
//   }
//   render() {
//       return (
//     <div className="App">
//       <CardList array={this.state.monsters}/>
//     </div>
//   );
//   }
// }

function App() {
  const [monsters, setMonsters] = useState([])
  
  useEffect(
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        console.log(users)
        return setMonsters(users )
      }
      )
    .catch(
    e => console.log(e)
   ),
     []
   )
  
  return (
    <div>
      <CardList array={monsters}/>
    </div>
  )
}





export default App;
