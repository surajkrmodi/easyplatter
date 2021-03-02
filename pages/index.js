import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar';
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../components/Carousel';
import Food from '../components/Food';
import Hiring from '../components/Hiring';
import Pricing from '../components/Pricing';
import Partners from '../components/Partners';
import Contacts from '../components/Contacts';
const Index = (props) => (
    <Layout>
    <div>
    <Carousel/>
    <Food />
    <Hiring />
    <Pricing />
    <Partners />
    <Contacts />
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossOrigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
    </div>
    </Layout>
);


export default Index;