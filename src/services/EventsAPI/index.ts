import api from '../api';
import { EventModel } from './models';
import { GetEventsQueryParams } from './types';

export class EventsAPI {
    public static getEvents(params?: GetEventsQueryParams) {
        return api.get<EventModel[]>('/events', { params: params });
    }

    public static getEventById(id: string) {
        return api.get<EventModel>(`/events/${id}`);
    }
}
