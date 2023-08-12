import { EventsAPI } from '../services/EventsAPI';

export class EventsController {
    public static getEvents() {
        return EventsAPI.getEvents();
    }
    public static getEventById(id: string) {
        return EventsAPI.getEventById(id);
    }
}
