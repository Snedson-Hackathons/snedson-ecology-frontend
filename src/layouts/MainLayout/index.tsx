import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import MainLayoutHeader from '../../components/MainLayoutHeader';
import './styles.scss';
import MainLayoutNav from '../../components/MainLayoutNav';

const MainLayout: FunctionComponent = () => {
    return (
        <div className='main-layout'>
            <MainLayoutHeader />
            <div className='main-layout__content'>
                <div className='main-layout__nav-cont'>
                    <MainLayoutNav />
                </div>
                <div className='main-layout__page'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
