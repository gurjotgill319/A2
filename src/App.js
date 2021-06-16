import React,{Component} from 'react';
import SCP from "./SCP";

class App extends Component
{
    render()
    {
      return(
        <SCP scp={ this.state.scp}/>

      );
    }
    state = { scp: []}

    componentDidMount()
    {
      fetch('https://database-bbd9.restdb.io/rest/content',
      {
        method: 'GET',
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60bee2b9f2a01c34b8ed3636",
          "content-type": "application/json"
        }
      })
      .then(result => result.json())
      .then((data) => { this.setState({scp: data})})

      .catch(console.log);
    }
   
}


export default App;
