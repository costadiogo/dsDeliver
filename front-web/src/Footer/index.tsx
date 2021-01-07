/* eslint-disable jsx-a11y/anchor-has-content */
import { ReactComponent as IsntagramIcon } from './instagram.svg';
import { ReactComponent as LinkedInIcon } from './linkedin.svg';
import './styles.css';
import { ReactComponent as YoutubeIcon } from './youtube.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/devsuperior" target="_blank">
                    <YoutubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/diogo-costa-8138a69b/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/" target="_blank">
                    <IsntagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;