import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import './styles.scss';
import { CreateEventRequestModel, Need } from '../../services/EventsAPI/models';
import { EventsController } from '../../controllers/EventsController';
import { useNavigate } from 'react-router-dom';
import { YMaps, Map, Placemark, SearchControl } from '@pbe/react-yandex-maps';

const EventCreatePage = () => {
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [expected_result, setExpectedResult] = useState<string>('');
    const [scheduled_date, setScheduledDate] = useState<number>(0);
    const [needs, setNeeds] = useState<Omit<Need, 'id'>[]>([]);
    const [needEditor, setNeedEditor] = useState<string>('');

    const [coords, setCoords] = useState<[number, number]>([
        56.838011, 60.597474,
    ]);

    const [zoom, setZoom] = useState<number>(10);

    const navigate = useNavigate();

    const [createEventModel, setCreateEventModel] =
        useState<CreateEventRequestModel | null>(null);

    useEffect(() => {
        setCreateEventModel({
            description,
            title,
            expected_result,
            scheduled_date,
            needs,
            location_lat: coords[0].toString(),
            location_lon: coords[1].toString(),
        });
    }, [description, title, expected_result, scheduled_date, needs, coords]);
    return (
        <div className='event-create-page'>
            <form
                className='event-details'
                onSubmit={(event) => {
                    event.preventDefault();
                    createEventModel &&
                        EventsController.createEvent(createEventModel).then(
                            (value) => {
                                navigate(
                                    `/events/${value.data.created_event_id}`
                                );
                            }
                        );
                }}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        event.preventDefault();
                    }
                }}
            >
                <div className='needs event-details__item'>
                    <h2 className='event-details__item-title'>Название</h2>
                    <input
                        className='event-details__title event-item__title'
                        value={title}
                        required
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                        placeholder='Название'
                    />
                </div>
                <div className='needs event-details__item'>
                    <h2 className='event-details__item-title'>Описание</h2>
                    <textarea
                        value={description}
                        required
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                        placeholder='Описание'
                    ></textarea>
                </div>
                <div className='needs event-details__item'>
                    <h2 className='event-details__item-title'>Нужды:</h2>
                    <input
                        type='text'
                        value={needEditor}
                        onChange={(event) => {
                            setNeedEditor(event.target.value);
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && needEditor !== '') {
                                setNeeds((prev) => [
                                    ...prev,
                                    { title: needEditor, is_checked: false },
                                ]);
                                setNeedEditor('');
                            }
                        }}
                        placeholder='Нужды'
                    />
                    <ul className='needs-list'>
                        {needs.map((value, index) => {
                            return (
                                <li className='needs-list__item' key={index}>
                                    {value.title}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='needs event-details__item'>
                    <h2 className='event-details__item-title'>Место:</h2>
                    <YMaps
                        query={{
                            apikey: '595c5bb8-2e50-4f33-a6a2-64c1cee73869',
                        }}
                    >
                        <Map
                            onClick={(e: any) => {
                                setCoords(e.get('coords'));
                                setZoom(16);
                            }}
                            width='100%'
                            defaultState={{
                                center: coords,
                                zoom: 10,
                            }}
                            state={{ center: coords, zoom: zoom }}
                        >
                            <Placemark geometry={coords}></Placemark>
                            <SearchControl />
                        </Map>
                    </YMaps>
                </div>
                <div className='event-details__item'>
                    <h2 className='event-details__item-title'>Дата и время:</h2>
                    <input
                        type='datetime-local'
                        required
                        onChange={(event) => {
                            setScheduledDate(
                                Number(new Date(event.target.value))
                            );
                        }}
                    />
                </div>
                <div className='needs event-details__item'>
                    <h2 className='event-details__item-title'>
                        Предполагаемый результат:
                    </h2>
                    <textarea
                        defaultValue={expected_result}
                        required
                        onChange={(event) => {
                            setExpectedResult(event.target.value);
                        }}
                        placeholder='Предполагаемый итог'
                    ></textarea>
                </div>
                <div className='event-details__item'>
                    <Button type='submit'>Создать</Button>
                </div>
            </form>
        </div>
    );
};

export default EventCreatePage;
