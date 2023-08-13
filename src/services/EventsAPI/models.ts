export type EventModel = {
    id: string;
    title: string;
    author: string;
    author_full_name: string;
    description: string;
    scheduled_date: number;
    participants_count: number;
    location_lat: number;
    location_lon: number;
    expected_result: string;
    actual_result: null;
    needs: Need[];
};

export type Need = {
    id: number;
    title: string;
    is_checked: boolean;
};

export type CreateEventRequestModel = {
    title: string;
    description: string;
    scheduled_date: number;
    expected_result: string;
    needs: Omit<Need, 'id'>[];
};

export type CreateEventResponseModel = {
    created_event_id: string;
};
