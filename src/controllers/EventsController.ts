import { EventsAPI } from '../services/EventsAPI';
import { CreateEventRequestModel } from '../services/EventsAPI/models';

export class EventsController {
    public static getEvents() {
        return EventsAPI.getEvents();
    }
    public static getEventById(id: string) {
        return EventsAPI.getEventById(id);
    }
    public static createEvent(model: CreateEventRequestModel) {
        return EventsAPI.createEvent(model);
    }
}
