import react from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const ContactUsPage = (() => {
    return (<>
        <Navbar/>
        <ContactUs />
        <Footer className=""/>
    </>);
        
});
export default ContactUsPage;