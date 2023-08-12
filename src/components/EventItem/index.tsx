import { FunctionComponent } from 'react';
import './styles.scss';
import { EventItemProps } from './types';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const EventItem: FunctionComponent<EventItemProps> = (props) => {
    const navigate = useNavigate();
    return (
        <div className='event-item'>
            <header className='event-item__header'>
                <h1 className='event-item__title'>{props.title}</h1>
                <p className='event-item__author'>
                    <span>Инициатор:</span>{' '}
                    <span>{props.author_full_name}</span>
                </p>
            </header>
            <div className='event-item__description'>{props.description}</div>
            <div className='event-item__actions'>
                <Button
                    onClick={() => {
                        navigate(`/events/${props.id}`);
                    }}
                >
                    Читать далее
                </Button>
            </div>
        </div>
    );
};

export default EventItem;
