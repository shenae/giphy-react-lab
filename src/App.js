import React, { Component } from 'react';
import './App.css';

/* 
 * Perhaps some hints?
 *
 * 1. Use a constructor and initialize state inside of it*/
 /*2. Set up a fetch function in fetchAllGifs(). **Use your giphy api endpoint as url**
 * 3. Call your fetch function inside of componentDidMount()
 * 4. Set up a loading message until promise is resolved, and fetch status: 200
 * 5. Maybe map through the fetched data and get them all to render on the page before you add the button functionality
 */

class App extends Component {
    constructor () {
      super()
      this.state = {
        allGifs: [],
        fetchOK: null
      }
  
    }

  componentDidMount() {
    this.fetchAllGifs();
  }

  fetchAllGifs() {
    return fetch('https://api.giphy.com/v1/gifs/random?api_key=7k1bt0XPnrLgImgvHYbPr4aoXb6Y6yhL&tag=&rating=PG')
  
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      // console.log(JSON.stringify(data));
      this.setState({ 
        allGifs: data.data.image_url,
        fetchOK: true
      })
    // set state with the data you've fetched from the API to allGifs
    return data.data.image_url
    })
    // and set fetchOK to true.
    // fetchOK = true 
  }


  /*
   * This function below could help you out :)
   */

  renderFetch() {
    if (this.state.fetchOK) { return <h1>Done</h1> }
    else { return <h1>Loading...</h1> }
  }

  render() {
    console.log(this.state.allGifs.data)
    return (
      <div className="App">
      {this.renderFetch()}
        <header className="App-header">
          <h1 className="App-title">Welcome to React Giphy</h1>
        </header>
        <main>
          <img src={this.state.allGifs} />
          <button onClick= {this.fetchAllGifs}>Change GIF</button>
          I'm going to show a collection of gifs!
        </main>
      </div>
    );
  }
}

export default App;
