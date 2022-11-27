import React from 'react';
import Advertises from '../Advertises/Advertises';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Extra from '../Extra/Extra';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertises></Advertises>
            <Extra></Extra>
        </div>
    );
};

export default Home;