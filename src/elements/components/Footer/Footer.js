import './Footer.css'
import logo from '../../resources/logo/logo.svg'
import facebook from '../../resources/images/facebook.svg'
import instagram from '../../resources/images/instagram.svg'
import twitter from '../../resources/images/twitter.svg'

const Footer = () => {
    return (
        <section className="footer">
            <div className="line"></div>
            <div className="brand_container">
                <div className='brand_info'>
                    <h3>Juicer store</h3>
                    <p>Our juicers are great.</p>
                </div>
                <img src={logo} alt='Juicer Logo' className="logo"/>
                <div className='social_media'>
                    <img src={facebook} alt='Juicer Logo' className="social"/>
                    <img src={instagram} alt='Juicer Logo' className="social"/>
                    <img src={twitter} alt='Juicer Logo' className="social"/>
                </div>
            </div>
            <div className="copyright">
                <div className='copyright_line'></div>
                <p className='copyright_text'>2022 IoT © Copyright all rights reserved</p>
            </div>
        </section>
    )
}

export default Footer;