import { useEffect, useState } from 'react';
import { EventModel } from '../../services/EventsAPI/models';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { EventsController } from '../../controllers/EventsController';
import Button from '../../components/Button';
import { YMaps, Map, Placemark, SearchControl } from '@pbe/react-yandex-maps';
import api from '../../services/api';
import { GeoCoderResponse } from './types';

const EventDetailsPage = () => {
    const { id } = useParams();

    const [event, setEvent] = useState<EventModel | null>(null);
    const [location, setLocation] = useState<string>('Уточняется...');

    useEffect(() => {
        if (id) {
            EventsController.getEventById(id).then((value) => {
                setEvent(value.data);
            });
        }
    }, [id]);

    useEffect(() => {
        if (event) {
            const url = `https://geocode-maps.yandex.ru/1.x/?apikey=595c5bb8-2e50-4f33-a6a2-64c1cee73869&geocode=${event.location_lon},${event.location_lat}&format=json`;
            api.get<GeoCoderResponse>(url).then((value) => {
                const loc =
                    value.data.response.GeoObjectCollection.featureMember[0]
                        .GeoObject.name;
                setLocation(loc);
            });
        }
    }, [event]);

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
                        {event.description}
                    </p>
                    <div className='needs event-details__item'>
                        <h2 className='event-details__item-title'>Нужды:</h2>
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
                    <div className='event-details__item'>
                        <YMaps
                            query={{
                                apikey: '595c5bb8-2e50-4f33-a6a2-64c1cee73869',
                            }}
                        >
                            <Map
                                width='100%'
                                defaultState={{
                                    center: [
                                        event.location_lat,
                                        event.location_lon,
                                    ],
                                    zoom: 16,
                                    type: 'yandex#map',
                                }}
                            >
                                <Placemark
                                    geometry={[
                                        event.location_lat,
                                        event.location_lon,
                                    ]}
                                />
                            </Map>
                        </YMaps>
                    </div>
                    <div className='event-details__item'>
                        <h2 className='event-details__item-title'>Место:</h2>
                        <p>{location}</p>
                    </div>
                    <div className='event-details__item'>
                        <h2 className='event-details__item-title'>
                            Дата и время:
                        </h2>
                        <p>{new Date(event.scheduled_date).toLocaleString()}</p>
                    </div>
                    <div className='needs event-details__item'>
                        <h2 className='event-details__item-title'>
                            Предполагаемый результат:
                        </h2>
                        <p>{event.expected_result}</p>
                    </div>
                    <div className='event-details__item'>
                        <Button>Участвовать</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventDetailsPage;
