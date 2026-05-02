// CategorySidebar.jsx
import Link from 'next/link';
import React from 'react';

const CategorySidebar = async () => {
  const response = await fetch('http://localhost:3000/category.json');
  const category = await response.json();
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {category.map(singleCategory => (
        <Link key={singleCategory.id} href={`?category=${singleCategory.name.toLowerCase()}`}><button 
          className='btn btn-info w-[130px]' 
          
        >
          {singleCategory.name}
        </button></Link>
      ))}
    </div>
  );
};

export default CategorySidebar;