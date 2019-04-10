import React, { Component } from 'react';
import './App.css';

/* 
 * Perhaps some hints?
 *
 * 1. Use a constructor and initialize state inside of it
 * 2. Set up a fetch function in fetchAllGifs(). **Use your giphy api endpoint as url**
 * 3. Call your fetch function inside of componentDidMount()
 * 4. Set up a loading message until promise is resolved, and fetch status: 200
 * 5. Maybe map through the fetched data and get them all to render on the page before you add the button functionality
 */

class App extends Component {
    // this.state = {
    //   allGifs: [],
    //   fetchOK: null
    // }

  componentDidMount() {
    // call fetch function here
  }

  fetchAllGifs() {
    // declare a url variable for the Giphy API endpoint
    // RETURN all fetched gifs!
    // set state with the data you've fetched from the API to allGifs
    // and set fetchOK to true.
  }


  /*
   * This function below could help you out :)
   */

  // renderFetch() {
  //   if (this.state.fetchOK) { return <h1>Done</h1> }
  //   else { return <h1>Loading...</h1> }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Giphy</h1>
        </header>
        <main>
          I'm going to show a collection of gifs!
        </main>
      </div>
    );
  }
}

export default App;
