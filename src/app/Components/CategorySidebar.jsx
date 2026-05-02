import React from 'react';

const CategorySidebar = ({singleCategory}) => {
    
    return (
        <div>
            <button className='btn btn-info w-full'>{singleCategory.name}</button>
        </div>
    );
};

export default CategorySidebar;