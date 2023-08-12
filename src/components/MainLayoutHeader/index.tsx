import logo from "../../assets/images/icons/logo.svg";
import "./styles.scss";

const MainLayoutHeader = () => {
    return (
        <header className='main-layout-header'>
            <div className='main-layout-header__content'>
                <img src={logo} alt='' className='main-layout-header__logo' />
            </div>
        </header>
    );
};

export default MainLayoutHeader;
