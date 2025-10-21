import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAsside from '../../Components/LeftAsside/LeftAsside';
import RightAsside from '../../Components/RightAsside/RightAsside';

const HomeLayout = () => {
    return (
        <div className='my-3'>
            <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            </header>
                <main className='w-11/12 mx-auto my-3  grid grid-cols-12 '>
                    
                 <aside className='col-span-3'>
                    <LeftAsside></LeftAsside>
                 </aside>
                  <section className='main col-span-6'>
                    <Outlet></Outlet>
                  </section>
                     <aside className='col-span-3'>
                    <RightAsside></RightAsside>
                 </aside>
                </main>
           </div>
    );
};

export default HomeLayout;