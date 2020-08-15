import React from 'react';
import "../asset/scss/Carousel.scss"
import {getTopFilms, getImageFromApi} from '../api/Api'

import { Link } from 'react-router-dom';

class Carousel extends React.Component{
  state={
    films:[]
  }

  
  componentDidMount(){
    getTopFilms().then(data => {
      this.setState({ films: data.results })
      console.log(data.results);
      
      
  })
  }

  render(){
    const Carousel = this.state.films.map((item)=>{
      return<div class="carousel-item">
        <Link to={"/Detail/"+ item.id}><img src={getImageFromApi(item.poster_path)} class="d-block w-100" alt="..."/></Link>
      
    </div>
  })
    return(
      <div className="carousel">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" className="col-sm-12">
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://www.letelegramme.fr/images/2019/10/22/cinema-qui-interdit-un-film-aux-moins-de-12-ans_4871700_1000x734p.jpg?v=1" class="d-block w-100" alt="..." />
  </div>
  {Carousel}
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
      </div>
  )
  }
    
    
}

export default Carousel