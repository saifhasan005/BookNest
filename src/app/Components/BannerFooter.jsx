import React from 'react';
import Marquee from 'react-fast-marquee';
const news = [
    {
        id: "1",
        title: 'New Arival: Rich Dad Poor Dad , Deep Work , Zero to One '
    },
    {
        id: "2",
        title: 'Discount: Get 25% if you buy 2 books together ' 
    },
]
const BannerFooter = () => {
    return (
         <div className=' mt-[35px] flex justify-between items-center bg-gray-200 gap-4 py-4 px-2 container mx-auto'>
            <button className='btn bg-cyan-400 dark:text-white'>Latest Books</button>
            <Marquee pauseOnHover={true}>
                {news.map(n=>{
                   return <span className='dark: text-black' key={n.id}>{n.title}  <span>🌟</span> </span>
    
                })}
            </Marquee>
        </div>
    );
};

export default BannerFooter;