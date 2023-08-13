import api from '../api';
import {
    CreateEventRequestModel,
    CreateEventResponseModel,
    EventModel,
} from './models';
import { GetEventsQueryParams } from './types';

export class EventsAPI {
    public static getEvents(params?: GetEventsQueryParams) {
        return api.get<EventModel[]>('/events', { params: params });
    }

    public static getEventById(id: string) {
        return api.get<EventModel>(`/events/${id}`);
    }

    public static createEvent(model: CreateEventRequestModel) {
        return api.post<CreateEventResponseModel>(`/events`, model);
    }
}
