import { useState, useEffect } from 'react';
import './styles.scss';
import { EventModel } from '../../services/EventsAPI/models';
import { EventsController } from '../../controllers/EventsController';
import EventItem from '../../components/EventItem';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
    const [events, setEvents] = useState<EventModel[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        EventsController.getEvents().then((value) => {
            if (value.status === 200) {
                setEvents(value.data);
            }
        });
    }, []);
    return (
        <div className='event-page'>
            <div className='event-page__actions'>
                <Button
                    onClick={() => {
                        navigate('/events/create');
                    }}
                >
                    Создать событие
                </Button>
            </div>
            <ul className='events'>
                {events.map((event) => {
                    return (
                        <li className='events__item' key={event.id}>
                            <EventItem
                                id={event.id}
                                author_full_name={event.author_full_name}
                                description={event.description}
                                scheduled_date={event.scheduled_date}
                                title={event.title}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default EventPage;
