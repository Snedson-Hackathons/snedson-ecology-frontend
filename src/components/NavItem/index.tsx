import { FunctionComponent } from 'react';
import { NavItemProps } from './types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavItem: FunctionComponent<NavItemProps> = ({
    iconSrc,
    navigateTo,
    title,
}) => {
    return (
        <NavLink
            to={navigateTo}
            className={({ isActive }) => {
                if (isActive) {
                    return 'nav-item nav-item_active';
                }
                return 'nav-item';
            }}
        >
            <img src={iconSrc} alt='' className='nav-item__icon' />
            <span className='nav-item__title'>{title}</span>
        </NavLink>
    );
};

export default NavItem;
