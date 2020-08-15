import React, {useState, useEffect} from 'react';
import {getFilmUnique, getImageFromApi} from '../api/Api'
import '../asset/scss/Detail.scss'



class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state={
          dataFilm:[],
          genre:""
        }
        // Ici on va créer les propriétés de notre component custom Search
      }

      componentDidMount(){
        const params = window.location.pathname;
        const parameters = params.split("/");
        const dat = parameters[2]
        console.log(`voici le params ${dat} `);

        // const dat = this.props.match.params.id;
        // console.log(dat);
        getFilmUnique(dat).then(data => {
            this.setState({ dataFilm: data, genre:data.genres[0].name })
            console.log(data.genres[0].name);
        })
      }
      
      render(props){
      console.log(this.state.dataFilm);
      const {AjoutFavorie} = this.props
      
      
      return(
        <div className="detail">
            <div class="col-md-12">
      <div class="row no-gutters">
      <div class="col-md-4">
      <img className="img" src={getImageFromApi(this.state.dataFilm.poster_path)} class="card-img" alt="..." />
      </div>
      <div class="col-md-7">
      <div class="card-body">
      <h5 class="card-title" style={{color:"white"}} >{this.state.dataFilm.title}</h5>
      <p class="" style={{color:"white"}} >{this.state.dataFilm.overview}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <div>
        <p class="text-muted">Genre: {this.state.genre} </p>
        <p class="text-muted">Date de production: {this.state.dataFilm.release_date} </p>
        <p class="text-muted">Moyyene de vote: {this.state.dataFilm.vote_average} </p>
        <p class="text-muted">Vote: {this.state.dataFilm.vote_count}</p>
        <p class="text-muted">Durée: {this.state.dataFilm.runtime} </p>
        <p class="text-muted">Budget: {this.state.dataFilm.budget} </p>
        <p class="text-muted">Popularité du film: {this.state.dataFilm.popularity} </p>
        <p ><i class="fa fa-heart" aria-hidden="true" style={{color:'red'}} onClick={AjoutFavorie(this.state.dataFilm.id)} ></i></p>
      </div>
      </div>
      </div>
      </div>
      </div>
        </div>
      )
      }
      
      }
      

export default Detail