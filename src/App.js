import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss'

import Header from './components/Header'
import Carousel from './components/Carousel'
import CardFilm from './components/CardFilm'
import Footer from './components/Footer'
import { getFilmsFromApiWithSearchedText } from './api/Api'
import TheContainer from './container/TheContainer'
import Detail from './container/Detail';

class App extends React.Component {
  

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.page=0
    this.totalPage=0
    this.state={
      films:[],
      
    }
    // Ici on va créer les propriétés de notre component custom Search
  }

  

//   _searchTextInputChanged(text) {
//     this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
// }

_searchTextInputChanged = input =>( e )=> {
  this.searchedText= input

  console.log(this.searchedText);
  
  getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
    this.totalPage=data.total_pages
    this.page = data.page

    console.log(this.totalPage + "   " + this.page);
    
    if(!(data.results ==undefined)){
      this.setState({ films: data.results })
    } else{
      console.log("il y' a rien");
      
    }
    
})
}

pagePlus = input =>( e )=> {
this.page= this.page+1
console.log("salut");

}

  componentDidMount(){
    getFilmsFromApiWithSearchedText("stars").then(data => {
      this.setState({ films: data.results })
  })
  }



render(){
  return (

    <BrowserRouter>
            <Header _searchTextInputChanged={this._searchTextInputChanged}/>
            <Switch>
            <div className= "App">
                {/* <Route exact path="/" component={TheContainer}/> */}
                <Route exact path='/' component={() => <TheContainer data={this.state.films} pagePlus={this.pagePlus} />} />
                <Route path="/Detail" component={Detail}/>
                
            </div>
            </Switch>
            <Footer />
    </BrowserRouter>
  );
}

  
}

export default App;
