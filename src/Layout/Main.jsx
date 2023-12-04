import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
      <div>
        <div className="mb-12">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      </div>
    );
};

export default Main;