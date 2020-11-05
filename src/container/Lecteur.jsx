import React, {useState, useEffect} from 'react';
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
// import '../../node_modules/react-modal-video/scss/modal-video.scss';
// import '../asset/scss/Detail.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class Detail extends React.Component {
   
    constructor(props) {
        super(props)
        this.state={
          videoUndefined:[],
          isOpen: true
        }
        // Ici on va créer les propriétés de notre component custom Search
      }



      openModal () {
        this.setState({isOpen: false})
        
      }


      
      
      render(props){
        const params = window.location.pathname;
        const parameters = params.split("/");
        const dat = parameters[1]

        console.log(parameters[1]);
        
      
      return(
        <div className="detail">
        <div>
          <ModalVideo channel='youtube' autoplay isOpen={this.state.isOpen} videoId={dat} onClose={() => this.setState({isOpen: false})} />
        </div>
        </div>
      )
      }
      
      }
      

export default Detail