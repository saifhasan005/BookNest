// CategorySidebar.jsx
import Link from 'next/link';
import React from 'react';

const CategorySidebar = async () => {
  const response = await fetch('https://book-nest-rho-five.vercel.app/category.json');
  const category = await response.json();
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Link href="/all-books">
        <button className='btn btn-info w-[130px]'>All</button>
      </Link>
      {category.map(singleCategory => (
        <Link key={singleCategory.id} href={`?category=${singleCategory.name.toLowerCase()}`}><button 
          className='btn btn-info w-[130px]' >
          {singleCategory.name}
        </button></Link>
      ))}
    </div>
  );
};

export default CategorySidebar;