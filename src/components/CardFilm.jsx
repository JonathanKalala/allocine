import React, {useState, useEffect} from 'react';
import "../asset/scss/CardFilm.scss"
import { getFilmsFromApiWithSearchedText } from '../api/Api'
import axios from 'axios'
import { getImageFromApi } from '../api/Api'
import { Link } from 'react-router-dom';


class CardFilm extends React.Component {

  changementType(a){
    for(let i=1; i<a; i++){
      // return <li class="page-item"><a class="page-link" href="#">2</a></li>
      console.log(a);
    }
    
    
    
  }

render(props){
    const {data, pagePlus, pageMoin, totalPage, clickPage} = this.props
    console.log(totalPage);
    
    const card = data.map((item)=>{
        return             <div class="" >
            <Link to={"/Detail/"+ item.id}>
            <img src={getImageFromApi(item.poster_path)} class="card-img-top" alt="..." style={{height:"200px"}} />
            </Link>
    <p class="card-text"><small class="text-muted">{item.title}</small></p>
    </div>
    })
    let Previous=[]
    if(totalPage>25){
      for(let i=1; i<=25; i++ ){
        Previous.push(<li class="page-item" onClick={clickPage(i)}><a class="page-link">{i}</a></li>)
        }
    } else{
      for(let i=1; i<=totalPage; i++ ){
        Previous.push(<li class="page-item" onClick={clickPage(i)}><a class="page-link">{i}</a></li>)
        }
    }
    

    console.log(Previous);
    

    return( 
        <div>
          <div class="card_parent" > 
    {card}
    </div>
    <nav aria-label="Page navigation example">
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
    </div>
    
    )
}
    
}

export default CardFilm