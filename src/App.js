import './App.css'
import Navbar from './components/Navbar'
import { Component } from "react";
import Products from "./components/Products";
import data from './data/data.json'
import Footer from './components/Footer';
import ProductFilter from './components/ProductFilter';


class App extends Component {

  constructor(props){
    super(props)

    this.state= {
      products: data.products,
      size: '',
      sort: ''
    }
  }


  handleSortChange = (e) => {
    
      const _sort = e.target.value

      // hello
      this.setState({
        sort: e.target.value,
        products: this.state.products.slice().sort((a, b) => {

          if(_sort === 'lowest'){
            
            return a.price > b.price ? 1 : -1 
          }
          else if(_sort === 'highest'){
    
            return a.price < b.price ? 1 : -1 
          }
          else{
            return a._id < b._id ? 1 : -1
          }
    
        })
      })      
  }

  handleSizeChange = (e) => {

    if(e.target.value === 'all'){

      this.setState({
        size: e.target.value,
        products: data.products 
      })
    }
    else{
      this.setState({
        size: e.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
      })
    }

  }



  render(){
      return (<>

        <Navbar/>

        <div className="app">

          <div className="main">
            
            <ProductFilter 
                count={this.state.products.length} 
                size={this.state.size} 
                sort={this.state.sort}
                handleSizeChange={this.handleSizeChange}
                handleSortChange={this.handleSortChange}
                
            />


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
