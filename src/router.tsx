import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import EventPage from './pages/EventPage';
import EventDetailsPage from './pages/EventDetailsPage';
import EventCreatePage from './pages/EventCreatePage';
import FeedPage from './pages/FeedPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/feed' />,
            },
            {
                path: '/feed',
                element: <FeedPage />,
            },
            {
                path: '/events',
                element: <EventPage />,
            },
            {
                path: '/events/create',
                element: <EventCreatePage />,
            },
            { path: 'events/:id', element: <EventDetailsPage /> },
            {
                path: '/reports',
                element: <>Reports</>,
            },
        ],
    },
]);

export default router;
