import React from 'react';
import "../asset/scss/Carousel.scss"

function Carousel(){
    return(
        <div className="carousel">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.letelegramme.fr/images/2019/10/22/cinema-qui-interdit-un-film-aux-moins-de-12-ans_4871700_1000x734p.jpg?v=1" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://www.letelegramme.fr/images/2019/10/22/cinema-qui-interdit-un-film-aux-moins-de-12-ans_4871700_1000x734p.jpg?v=1" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.letelegramme.fr/images/2019/10/22/cinema-qui-interdit-un-film-aux-moins-de-12-ans_4871700_1000x734p.jpg?v=1" class="d-block w-100" alt="..."/>
    </div>
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

export default Carousel