export type EventModel = {
    id: string;
    title: string;
    author: string;
    author_full_name: string;
    description: string;
    scheduled_date: number;
    participants_count: number;
    location_lat: null;
    location_lon: null;
    expected_result: string;
    actual_result: null;
    needs: Need[];
};

export type Need = {
    id: number;
    title: string;
    is_checked: boolean;
};
