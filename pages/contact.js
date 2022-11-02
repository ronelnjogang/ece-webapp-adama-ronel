import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <>
            <Header></Header>
            <div class='container-fluid section1 bg-teal-100 border-t-4 border-teal-500'>
                <div>
                    <p class='title'>LOOCK BLOG</p>
                </div>
            </div>
            <div className='container contact-block'>
                <div className='society'>
                    society name
                </div>
                <div className='info'>
                    +33 07 54 21 85 21
                </div>
                <div className='info'>
                    info@loock.fr
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}