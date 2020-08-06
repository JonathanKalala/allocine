import React, {useState, useEffect} from 'react';
import Carousel from '../components/Carousel'
import CardFilm from '../components/CardFilm'

class App extends React.Component {



render(){
  const {data, pagePlus} = this.props

  return (
    <div className="">
        <Carousel />
        <CardFilm data={data} pagePlus={pagePlus} />
      </div>
  );
}

  
}

export default App;
