import './App.css'
import Navbar from './components/Navbar'
import { Component } from "react";
import Products from "./components/Products";
import data from './data/data.json'
import Footer from './components/Footer';


class App extends Component {

  constructor(props){
    super(props)

    this.state= {
      products: data.products,
      size: '',
      sort: ''
    }
  }

  render(){
      return (<>

        <Navbar/>

        <div className="app">

          <div className="main">
            <Products products={this.state.products}/>
          </div>

          <div className="sidebar">
            
          </div>
        </div>

        <Footer/>
          
    </>)
  }
}

export default App
