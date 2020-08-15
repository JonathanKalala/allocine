import React, {Component} from 'react';
import "../asset/scss/Header.scss"
import {Link} from 'react-router-dom'



class Header extends React.Component {

    state={
        recherche:""
    }

    // function OnSearch(e) {
    //     let recherche= e.target.value
    //     if(recherche){
    //         _searchTextInputChanged()
    //     }
    // }
    
    OnSearch = (e)=>{   
        console.log(e.target.value);
        this.setState({
            recherche:e.target.value
        })
 
      }

    render(){
        const {_searchTextInputChanged} = this.props
        return(
            <header className="header">
                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/d72c6775049285.Y3JvcCwxMTMyLDg4NSwxMzQsNjQ.png" alt=""></img>
                <div className="menu">
                    <ul className="menu_text">
                        <li>Cinema</li>
                        <li>Serie</li>
                        <li>Favories</li>
                    </ul>
                    
                    <form class="form-inline active-purple-3 active-purple-4">
                        {/* <i class="fas fa-search" aria-hidden="true"></i> */}
                        <i class="fas fa-search" onClick={_searchTextInputChanged(this.state.recherche)} style={{cursor:"pointer"}} ></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" onChange={(text) => this.OnSearch(text)} />
                    </form>
                </div>
            </header>
        )
    }
    
}

export default Header