import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import HotelInfo from '../../components/Hotelinfo';
import Rooms from '../../components/Rooms';
import Dining from '../../components/Dining';
import Events from '../../components/Events';
import Attraction from '../../components/Attractions';

const Index = () => {
    return (
        <div>
            <Header/>
            <main id="wrapper">
                <Welcome/>
                <HotelInfo/>
                <Rooms/>
                <Dining/>
                <Events/>
                <Attraction/>
            </main>
            <Footer/>
        </div>
    )
};
export default Index;
