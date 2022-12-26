import Link from 'next/link'

import Header from './header'
import Headers from './header.tsx'
import Footer from './footer'

export default function Layout({ children }) {
    return (
        <>
            <Headers></Headers>
            <div>{children}</div>
            <Footer></Footer>
        </>
    )
}