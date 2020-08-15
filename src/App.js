import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.scss'

import Header from './components/Header'
import Carousel from './components/Carousel'
import CardFilm from './components/CardFilm'
import Footer from './components/Footer'
import { getFilmsFromApiWithSearchedText, getFilmsAll } from './api/Api'
import TheContainer from './container/TheContainer'
import Detail from './container/Detail';
import Favori from './container/Favories'

class App extends React.Component {
  

  constructor(props) {
    super(props)
    this.searchedText = "stars" // Initialisation de notre donnée searchedText en dehors du state
    this.page=1
    this.totalPage=10
    this.Favories=[44833]
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
  this.page=1

  console.log(this.searchedText);
  
  getFilmsFromApiWithSearchedText(this.searchedText, this.page).then(data => {
    this.totalPage=data.total_pages
    this.page = data.page
    console.log(this.totalPage);
    

    console.log(this.totalPage + "   " + this.page);
    
    if(!(data.results ==undefined)){
      this.setState({ films: data.results })
    } else{
      console.log("il y' a rien");
      
    }
    
})
}




AjoutFavorie = input =>( e )=> {
  console.log("Je suis ajout");
  this.Favories.push(input)

  console.log(this.Favories);
  
  
}

pagePlus = input =>( e )=> {
if(this.page===0){
  this.page= this.page+2
} else{
  this.page= this.page+1
}

console.log(this.page);
console.log(this.totalPage);

if(this.page <= this.totalPage && this.page > 0){
  getFilmsFromApiWithSearchedText(this.searchedText, this.page).then(data => {
    this.totalPage=data.total_pages
    this.page = data.page
  
    console.log(this.totalPage + "   " + this.page);
    
    if(!(data.results ==undefined)){
      this.setState({ films: data.results })
    } else{
      console.log("il y' a rien");
      
    }
    
  })
} else if (this.page === undefined){
    this.page=1;
    console.log("il n'a plus de page");
} else{
  console.log("il n'a plus de page");
}


}


pageMoin = input =>( e )=> {
  if(this.page>0){
    this.page= this.page-1
  console.log(this.page);
  console.log(this.searchedText);
  }
  
  
  if(this.page >=1){
    getFilmsFromApiWithSearchedText(this.searchedText, this.page).then(data => {
      this.totalPage=data.total_pages
      this.page = data.page
    
      console.log(this.totalPage + "   " + this.page);
      
      if(!(data.results ==undefined)){
        this.setState({ films: data.results })
      } else{
        console.log("il y' a rien");
        
      }
      
    })
  } else if (this.page === undefined){
    this.page=1;
    console.log("il n'a plus de page");
} else{
    console.log("il n'a plus de page");
  }
  
  }

  clickPage = input =>( e )=> {
    console.log(input);
    if(input>0){
      this.page= input
    console.log(this.page);
    console.log(this.searchedText);
    }
    
    
    if(this.page >=1){
      getFilmsFromApiWithSearchedText(this.searchedText, this.page).then(data => {
        this.totalPage=data.total_pages
        this.page = data.page
      
        console.log(this.totalPage + "   " + this.page);
        
        if(!(data.results ==undefined)){
          this.setState({ films: data.results })
        } else{
          console.log("il y' a rien");
          
        }
        
      })
    } else if (this.page === undefined){
      this.page=1;
      console.log("il n'a plus de page");
  } else{
      console.log("il n'a plus de page");
    }
    
    }
  

  componentDidMount(){
    getFilmsAll().then(data => {
      this.setState({ films: data.results })
      console.log(data.results);
      
      
  })
  }



render(){
  return (

    <BrowserRouter>
            <Header _searchTextInputChanged={this._searchTextInputChanged}/>
            <Switch>
            <div className= "App">
                {/* <Route exact path="/" component={TheContainer}/> */}
                <Route exact path='/' component={() => <TheContainer data={this.state.films} pagePlus={this.pagePlus} pageMoin={this.pageMoin} totalPage={this.totalPage} clickPage={this.clickPage} page={this.page} />} />
                <Route path="/Detail/:id" component={()=> <Detail AjoutFavorie={this.AjoutFavorie} />}/>
                {/* <Route path="/Favorie" component={()=> <Favori Favories={this.Favories} />} /> */}
            </div>
            </Switch>
            <Footer />
    </BrowserRouter>
  );
}

  
}

export default App;
