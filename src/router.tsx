import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import EventPage from './pages/EventPage';
import EventDetailsPage from './pages/EventDetailsPage';

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
                element: <>Feed</>,
            },
            {
                path: '/events',
                element: <EventPage />,
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
