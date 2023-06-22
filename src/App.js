import './App.css';
import News from './components/News';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state = {
    prgress : 0
  }

  setProgress = (progress) => 
    {
      this.setState({ progress: progress })
    }
  render() {
    return (
      <>
        <Router>
          
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          
          
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress}  key='general' pageSize={6} country='in' category='general' />}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key='business' pageSize={6} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' pageSize={6} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={6} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={6} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress}  key='sports' pageSize={6} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress}  key='technology' pageSize={6} country='in' category='technology' />}></Route>
          </Routes>
        
      </Router>
      </>
    )
  }
}
