import React, {useState, useEffect} from 'react';
import {getFilmUnique, getImageFromApi} from '../api/Api'
import axios from 'axios'

import YouTube from 'react-youtube';
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import '../asset/scss/Detail.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.id=""
        this.openModal = this.openModal.bind(this)
        this.state={
          videoUndefined:[],
          isOpen: false,
          ElementStyle: {
            display: 'none'
          },
          dataFilm:[],
          genre:"",
          video:""
        }
        // Ici on va créer les propriétés de notre component custom Search
      }

      Method() {
        if(this.state.ElementStyle.display=="none"){
          this.setState({
            ElementStyle: {
            
            display: 'block'
            }
          });
        } else {
          this.setState({
            ElementStyle: {
            
            display: 'none'
            }
          });
        }
       
      }

     

      openModal () {
        if(!(this.state.video.key==undefined)){
          this.setState({isOpen: true})
        } else{
          toast.warning(this.state.dataFilm.title + " " + "n'a pas de spot");
          console.log("pas de video");
          
        }
        
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

        axios.get(`https://api.themoviedb.org/3/movie/${dat}/videos?api_key=b823688b32c2291b6c40399472cbe91b&language=fr`).then((resVideo) => {
        if(!(resVideo.data.results[1]==undefined)){
          this.setState({video:resVideo.data.results[1]})
        } else{
          this.setState({
            videoUndefined: "Ce film n'a pas de spot"
          })
        }
        
        console.log(resVideo.data.results[1]);
        }).catch((erreur)=> {
        console.log(erreur);
    })
      }
      
      render(props){
      console.log(this.state.dataFilm);
      const {AjoutFavorie} = this.props

      const opts = {
        height: '200',
        width: '300',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          // autoplay: 1,
        },
      };
      
      
      return(
        <div className="detail">
            <div class="col-md-12">
      <div class="row no-gutters">
      <div class="col-md-4">
      <img className="img" src={getImageFromApi(this.state.dataFilm.poster_path)} class="card-img" alt="..." onClick={this.openModal} />
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
        <p>{this.videoUndefined}</p>
        <button type="button" class="btn btn-warning" onClick={this.openModal} >voir le spot</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="youtube"style={this.state.ElementStyle}>
        {this.state.video == undefined ? <p>La video n'existe pas</p> : <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.video.key} onClose={() => this.setState({isOpen: false})} /> }
      
      </div>
      
      <div>
      <ToastContainer />
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.video.key} onClose={() => this.setState({isOpen: false})} />
      </div>
        </div>
      )
      }
      
      }
      

export default Detail