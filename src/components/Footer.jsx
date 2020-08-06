import React from 'react';
import "../asset/scss/Footer.scss"
import { SocialIcon } from 'react-social-icons';
import logo from '../asset/image/footer.png'

function Footer(){
    return(
        <footer>
            <div className="footer1">
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quos nemo aut sapiente cupiditate deserunt nihil hic! Suscipit molestiae recusandae alias voluptatum nemo nesciunt iusto, magnam quo aut dolore facere.
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur recusandae expedita culpa voluptatum animi voluptatibus commodi, aspernatur nobis molestiae cupiditate doloremque necessitatibus magnam earum incidunt labore. Animi provident cumque ea!
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, voluptatum harum at veniam nisi labore neque explicabo corporis distinctio quis, officiis ipsam quos ullam dignissimos ipsum voluptatem fuga aut quam!
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