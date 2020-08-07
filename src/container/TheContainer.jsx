import React, {useState, useEffect} from 'react';
import Carousel from '../components/Carousel'
import CardFilm from '../components/CardFilm'

class App extends React.Component {



render(){
  const {data, pagePlus, pageMoin, totalPage, clickPage} = this.props
  console.log(totalPage);
  

  return (
    <div className="">
        <Carousel />
        <CardFilm data={data} pagePlus={pagePlus} pageMoin={pageMoin} totalPage={totalPage} clickPage={clickPage}/>
      </div>
  );
}

  
}

export default App;
