import React, {useState, useEffect} from 'react';
import "../asset/scss/CardFilm.scss"
import { getFilmUnique } from '../api/Api'
import axios from 'axios'
import { getImageFromApi } from '../api/Api'
import { Link } from 'react-router-dom';


class Favorie extends React.Component {


render(props){
  
    return( 
    <div>
      <h1>KALALALA </h1>
    </div>
    )
}
    
}

export default Favorie

























// import React, {useState, useEffect} from 'react';
// import "../asset/scss/CardFilm.scss"
// import { getFilmUnique } from '../api/Api'
// import axios from 'axios'
// import { getImageFromApi } from '../api/Api'
// import { Link } from 'react-router-dom';


// class Favorie extends React.Component {
  

//   // constructor(props) {
//   //   super(props)
//   //   this.daFilm = []
//   //   this.state={
//   //     dataFilm:[]
//   //   }
//   //   // Ici on va créer les propriétés de notre component custom Search
//   // }

//   state={
//     dataFilm:[]
//   }

//   listeFavories(a){
//     console.log(a);
//     a.map(item=>{
//       return <h1>gola</h1>
//     })
    
    
//     }

// render(props){
//   //   let tab = [];
//     const {Favories} = this.props
//   //   let card = Favories.map((item)=>{
//   //  getFilmUnique(item).then(data => {
//   //        tab.push(<p>Alloooooooooo</p>)
//   // })
//   // })

//   let nom= <h1>Akkko</h1>
//   let table=[]
//       for(let i=0; i<Favories; i++ ){
//         getFilmUnique(Favories[i]).then(data => {
//           table.push(data)
//    })
//   }
//     console.log(table)
//     let c = [1, 2, 3, 4]
    
    
  
    
    

//     return( 
//     <div>
//       <h1>KALALALA </h1>
//     </div>
//     )
// }
    
// }

// export default Favorie
