import React from 'react'
import Header from '../../widgets/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../widgets/Footer'

export function Layout() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
