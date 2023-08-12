import {
    FunctionComponent,
    DetailedHTMLProps,
    ButtonHTMLAttributes,
} from 'react';
import './styles.scss';

const Button: FunctionComponent<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
> = (props) => {
    return <button {...props} className='custom-button'></button>;
};

export default Button;
