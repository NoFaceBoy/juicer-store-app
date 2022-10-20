import './Header.css'
    import logo from '../../resources/logo/logo.svg'
    import {Link} from "react-router-dom";

    const Header = () => {
        return(
        <header className="header">
            <div className='wrapper'>
                <img src={logo} alt='Juicer Store Logo' className="logo"/>
                <nav className='nav'>
                    <Link to="/" className='nav_item'>Home</Link>
                    <Link to="/catalog" className='nav_item'>Catalog</Link>
                    <Link to="/cart" className='nav_item'>Cart</Link>
                </nav>
            </div>
            <div className='line'></div>
        </header>
    )
}

export default Header;