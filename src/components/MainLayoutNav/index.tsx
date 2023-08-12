import { useState } from 'react';
import { NavItemProps } from '../NavItem/types';
import NavItem from '../NavItem';
import './styles.scss';
import eventsLogo from '../../assets/images/icons/events_logo.svg';
import feedLogo from '../../assets/images/icons/feed_icon.svg';
import reportsLogo from '../../assets/images/icons/reports_logo.svg';

const MainLayoutNav = () => {
    const [navItems, _] = useState<NavItemProps[]>([
        { iconSrc: feedLogo, navigateTo: '/feed', title: 'Лента' },
        { iconSrc: eventsLogo, navigateTo: '/events', title: 'События' },
        { iconSrc: reportsLogo, navigateTo: '/reports', title: 'Обращения' },
    ]);
    return (
        <nav className='main-layout-nav'>
            <ul className='main-layout-nav-list'>
                {navItems.map((value, index) => {
                    return (
                        <li className='main-layout-nav-list__item' key={index}>
                            <NavItem
                                iconSrc={value.iconSrc}
                                navigateTo={value.navigateTo}
                                title={value.title}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default MainLayoutNav;
