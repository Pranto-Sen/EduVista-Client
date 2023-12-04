import React from 'react';
import Banner from '../Banner/Banner';
import Collaborator from '../Collaborator/Collaborator';
import Hilight from '../Highlight/Hilight';
import Relevent from '../Relevent/Relevent';
import Teacher from '../Teacher/Teacher';
import Footer from '../Footer/Footer';
import Contact from '../Contuct/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collaborator></Collaborator>
            <Hilight></Hilight>
            <Relevent></Relevent>
            <Teacher></Teacher>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;