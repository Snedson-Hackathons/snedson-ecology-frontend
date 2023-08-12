import { useEffect, useState } from 'react';
import { EventModel } from '../../services/EventsAPI/models';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { EventsController } from '../../controllers/EventsController';

const EventDetailsPage = () => {
    const { id } = useParams();

    const [event, setEvent] = useState<EventModel | null>(null);

    useEffect(() => {
        if (id) {
            EventsController.getEventById(id).then((value) => {
                setEvent(value.data);
            });
        }
    }, [id]);

    return (
        <div className='event-details-page'>
            {!event ? (
                <></>
            ) : (
                <div className='event-details'>
                    <div className='event-details__header event-item__header'>
                        <h1 className='event-details__title event-item__title'>
                            {event.title}
                        </h1>
                        <p className='event-item__author'>
                            <span>Инициатор:</span>{' '}
                            <span>{event.author_full_name}</span>
                        </p>
                    </div>
                    <p className='event-details__description'>
                        <pre>{event.description}</pre>
                    </p>
                    <div className='needs event-details__item'>
                        <h2 className='event-details__item-title'>Нужды</h2>
                        <ul className='needs-list'>
                            {event.needs.map((value) => {
                                return (
                                    <li
                                        className='needs-list__item'
                                        key={value.id}
                                    >
                                        {value.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetailsPage;
