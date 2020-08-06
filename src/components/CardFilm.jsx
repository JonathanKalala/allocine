import React, {useState, useEffect} from 'react';
import "../asset/scss/CardFilm.scss"
import { getFilmsFromApiWithSearchedText } from '../api/Api'
import axios from 'axios'
import { getImageFromApi } from '../api/Api'
import { Link } from 'react-router-dom';

class CardFilm extends React.Component {

render(props){
    const {data, pagePlus} = this.props
    const card = data.map((item)=>{
        return             <div class="" >
            <Link to={"/Detail/"+ item.id}>
            <img src={getImageFromApi(item.poster_path)} class="card-img-top" alt="..." style={{height:"200px"}} />
            </Link>
    <p class="card-text"><small class="text-muted">{item.title}</small></p>
    </div>
    })

    return( 
        
    <div class="card_parent" > 
    {card}
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link"  aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link"  aria-label="Next" onClick={()=>pagePlus("text")}>
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