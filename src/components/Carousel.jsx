import React from 'react';
import "../asset/scss/Carousel.scss"
import {getTopFilms, getImageFromApi} from '../api/Api'

import { Link } from 'react-router-dom';

class Carousel extends React.Component{
  state={
    films:[]
  }

  
  componentDidMount(){
    getTopFilms(1).then(data => {
      this.setState({ films: data.results })
      console.log(data.results);
      
      
  })
  }

  render(){
    const {data1} = this.props;
    const carousel = data1.map((item)=>{
      if(item==data1[0]){
        return (
          <div class="carousel-item active">
            <Link to={"/Detail/"+ item.id}><img src={getImageFromApi(item.poster_path)} class="d-block w-100" alt="..."/></Link>
        <div class="carousel-caption d-none d-md-block">
        <h5>{item.title}</h5>
        <p>Avec une popularité de {item.popularity}</p>
        </div>
      </div>
        )
      }
      else{
        return (
          <div class="carousel-item">
            <Link to={"/Detail/"+ item.id}><img src={getImageFromApi(item.poster_path)} class="d-block w-100" alt="..."/></Link>
        <div class="carousel-caption d-none d-md-block">
        <h5>{item.title}</h5>
        <p>Avec une popularité de {item.popularity}</p>
        </div>
      </div>
        )
      }
      
  })
    return(
      <div>
        <div className="carousel">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  {/* <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol> */}
  <div class="carousel-inner">

    {carousel}
    
  </div>
  {/* <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>
      </div>
      </div>
      
  )
  }
    
    
}

export default Carousel