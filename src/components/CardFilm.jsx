import React, {useState, useEffect} from 'react';
import "../asset/scss/CardFilm.scss"
import { getFilmsFromApiWithSearchedText } from '../api/Api'
import axios from 'axios'
import { getImageFromApi, getTopFilms } from '../api/Api'
import { Link } from 'react-router-dom';


class CardFilm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      films:[],
      ElementStyle: {
      color: 'black',
      border:"1px solid yellow"
    }
    
      }
    }

    componentDidMount(){
      getTopFilms(2).then(data => {
        this.setState({ films: data.results })
        console.log(data.results);
        
        
    })
    }


      Method() {
        if(this.state.ElementStyle.color=="black"){
          this.setState({
            ElementStyle: {
            
            color: 'red'
            }
          });
        } else {
          this.setState({
            ElementStyle: {
            
            color: 'black'
            }
          });
        }
       
      }

  changementType(a){
    for(let i=1; i<a; i++){
      // return <li class="page-item"><a class="page-link" href="#">2</a></li>
      console.log(a);
    }
    
    
    
  }

render(props){
  
  
    const {data, pagePlus, pageMoin, totalPage, clickPage, page, titreSearch} = this.props
    console.log(totalPage);
    console.log(data);

    let card;

    if(data.length==0){
      card = this.state.films.map((item)=>{
        return             <div class="" >
            <Link to={"/Detail/"+ item.id}>
            <img src={item.poster_path?getImageFromApi(item.poster_path) : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Question_Mark_Film_Poster.jpg/220px-Question_Mark_Film_Poster.jpg"} class="card-img-top" alt="..." style={{height:"200px"}} />
            </Link>
    <p class="card-text"><small class="text-muted">{item.title}</small></p>
    {/* <p ><i class="fa fa-heart" aria-hidden="true" style={this.state.ElementStyle} onClick={this.Method.bind(this)}></i></p> */}
    </div>
    })
    } else{
      card = data.map((item)=>{
        return             <div class="" >
            <Link to={"/Detail/"+ item.id}>
            <img src={item.poster_path?getImageFromApi(item.poster_path) : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Question_Mark_Film_Poster.jpg/220px-Question_Mark_Film_Poster.jpg"} class="card-img-top" alt="..." style={{height:"200px"}} />
            </Link>
    <p class="card-text"><small class="text-muted">{item.title}</small></p>
    {/* <p ><i class="fa fa-heart" aria-hidden="true" style={this.state.ElementStyle} onClick={this.Method.bind(this)}></i></p> */}
    </div>
    })

    }
    
    
    let Previous=[]
    if(page<totalPage){
      if(page>2){
        for(let i=page-2; i<=page+2; i++ ){
          if(page==i){
            Previous.push(<li class="page-item" onClick={clickPage(i)}><a class="page-link" style={{backgroundColor:"yellow"}} >{i}</a></li>)
          } else{
            Previous.push(<li class="page-item" onClick={clickPage(i)}><a class="page-link">{i}</a></li>)
          }
          }
      } else{
        for(let i=1; i<=page+4; i++ ){
          if(page==i){
            Previous.push(<li class="page-item" onClick={clickPage(i)}><a class="page-link" style={{backgroundColor:"yellow"}} >{i}</a></li>)
          } else{
            Previous.push(<li class="page-item" onClick={clickPage(i)}><a class="page-link">{i}</a></li>)
          }
          }
      }
      
    }
    

    console.log(Previous);
    

    return( 
        <div>
          <h1>{titreSearch}</h1>
          <div class="card_parent" > 
    {card}
    </div>
    <nav aria-label="Page navigation example" className='pagination1'>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link"  aria-label="Previous" onClick={pageMoin()}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {Previous.map((item)=>{
      return item
    })}
    <li class="page-item">
      <a class="page-link"  aria-label="Next" onClick={pagePlus()}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<nav aria-label="Page navigation example" className='pagination2'>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link"  aria-label="Previous" onClick={pageMoin()}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link"  aria-label="Next" onClick={pagePlus()}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
    
    )
}
    
}

export default CardFilm