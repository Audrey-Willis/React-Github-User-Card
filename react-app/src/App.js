import React from 'react';
 import Cards from "./Cards";
 import './App.css';
 import axios from 'axios';

 class App extends React.Component {

   constructor() {
     super();
     this.state = {
       users: [],
       followers: []
     }
   }

   componentDidMount() {
     axios.get("https://api.github.com/users/Audrey-Willis")
       .then(response => {
         const userData = response.data
         console.log(userData);
         this.setState({
           users: userData
         })
       })
       .catch(error => {
         console.log(error);
       })
   }

   componentDidUpdate() {
     axios.get("https://api.github.com/users/Audrey-Willis/followers")
       .then(response => {
         const followerData = response.data
         console.log(followerData)
         this.setState({
           followers: followerData
         })
       })
   }

   render() {
     return (
       <div className="App">
         <h1>GitHub Cards</h1>
         <Cards 
           users={this.state.users}
           followers={this.state.followers}/>
       </div>
     );
   }
 }

 export default App;
