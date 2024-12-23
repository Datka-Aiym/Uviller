import React from 'react'
import { useRoutes } from 'react-router-dom'
import Onas from '../pages/Onas/index'
import DostavOplata from '../pages/DostavOplata/index'
import Loialnost from '../pages/Loialnost/index'
import Naprim from '../pages/Naprim/index'
import Contact from '../pages/Contact/index'
import Cards from '../pages/Cards/index'
import Rakushka from '../pages/Rakushka/index'
import NotFound from '../widgets/NotFound/index'
import Blog from '../pages/Blog/index'
import { Layout } from '../widgets/Layout/Layout'
import { Home } from '../pages/Home/Home'

export default function Myroutes() {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{ path: '/', element: <Home /> },
				{ path: 'onas', element: <Onas /> },
				{ path: 'dostav-oplata', element: <DostavOplata /> },
				{ path: 'loialnost', element: <Loialnost /> },
				{ path: 'naprim', element: <Naprim /> },
				{ path: 'contact', element: <Contact /> },
				{ path: 'cards', element: <Cards /> },
				{ path: 'rakushka', element: <Rakushka /> },
				{ path: 'blog', element: <Blog /> },
				{ path: '*', element: <NotFound /> },
			],
		},
	])
	return routes
}
