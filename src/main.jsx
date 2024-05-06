import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import HowToPage from './pages/HowToPage.jsx';
import GamePage from './pages/GamePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: 'how-to/',
		element: <HowToPage />,
	},
	{
		path: 'game/:category',
		element: <GamePage />,
	},
	{
		path: 'categories/',
		element: <CategoryPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
