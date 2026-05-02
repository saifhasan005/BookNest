// CategorySidebar.jsx
import React from 'react';

const CategorySidebar = async () => {
  const response = await fetch('http://localhost:3000/category.json');
  const category = await response.json();
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {category.map(singleCategory => (
        <button 
          className='btn btn-info w-[130px]' 
          key={singleCategory.id}
        >
          {singleCategory.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySidebar;