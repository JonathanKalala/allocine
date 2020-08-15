import React from 'react';
import "../asset/scss/Footer.scss"
import { SocialIcon } from 'react-social-icons';
import logo from '../asset/image/footer.png'

function Footer(){
    return(
        <footer>
            <div className="footer1">
                <div>
                    {/* <p>Apropos de nous</p>
                    <p>Recrutement</p>
                    <p>Publicitz GNU</p> */}
                    <p>Politique de coquies</p>
                    <p>Donné personnelles</p>
                    <p>Jeux concours</p>
                    <p>Revues de presse</p>
                </div>
                <div>
                    <p>Nous sommes ausssi sur mobile :</p>
                <span class="iconify" data-icon="logos:android-icon" data-inline="false"></span>
                <span class="iconify" data-icon="openmoji:apple" data-inline="false"></span>
                </div>
                <div>
                    <p>Avenue de la montagne 25,</p>
                    <p>Saint Luis de la cravatte</p>
                    <p>+243852282012</p>
                    <p>AloocineGilkbens@gmail.com</p>
                </div>
            </div>
            <div className="footer2">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                <SocialIcon icon="google" url="https://google.com/your-goole-handle"/> {"    "}
                <SocialIcon icon="facebook" url="https://facebook.com/your-facebook-handle"/> {"    "}
                <SocialIcon icon="whatsapp" url="https://whatsapp.com/your-whatsapp-handle"/> {"    "}
                <SocialIcon icon="twitter" size='50px' url="https://twitter.com/your-twitter-handle"/>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer