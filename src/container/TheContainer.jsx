import React, {useState, useEffect} from 'react';
import Carousel from '../components/Carousel'
import CardFilm from '../components/CardFilm'
import {getTopFilms, getImageFromApi} from '../api/Api'

class App extends React.Component {

  state={
    films1:[],
    films2:[],
    films3:[]
  }

  componentDidMount(){
    getTopFilms(1).then(data => {
      this.setState({ films1: data.results })
      console.log(data.results);
  })

  getTopFilms(2).then(data => {
    this.setState({ films2: data.results })
    console.log(data.results);
})

getTopFilms(3).then(data => {
  this.setState({ films3: data.results })
  console.log(data.results);
})
  }

render(){
  const {data, pagePlus, pageMoin, totalPage, clickPage, page, titreSearch} = this.props
  console.log(totalPage);
  

  return (
    <div className="theContainer">
        <h1 style={{paddingTop:"120px"}} >Les tops</h1>
        <div className="parent_carousel">
          <Carousel data1={this.state.films1}/>
          <div className="carousel2">
          <Carousel data1={this.state.films2} />
          </div>
          <div className="carousel3">

          <Carousel data1={this.state.films3} />
          </div>
          
        </div>
        <CardFilm data={data} pagePlus={pagePlus} pageMoin={pageMoin} totalPage={totalPage} clickPage={clickPage} page={page} titreSearch={titreSearch}/>
      </div>
  );
}

  
}

export default App;








// componentDidMount(){
//   const dat = this.props.match.params.id;
//   console.log(dat);
//   getFilmUnique(dat).then(data => {
//       this.setState({ dataFilm: data.results })
//       console.log(data);
//   })
// }

// render(props){
// console.log(this.state.dataFilm);


// return(
//   <div className="detail">
//       <div class="col-md-12">
// <div class="row no-gutters">
// <div class="col-md-5">
// <img src={this.state.dataFilm===undefined? "https://fr.web.img4.acsta.net/pictures/19/07/01/09/32/5896891.jpg" : getImageFromApi(this.state.dataFilm.poster_path)} class="card-img" alt="..." />
// </div>
// <div class="col-md-7">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//   <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
// </div>
// </div>
// </div>
// </div>
//   </div>
// )
// }

// }
