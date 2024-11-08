import React from 'react';

const CategoryTitle = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold">Browse By Category</h2>
      <a href="#" className="text-red-500 hover:underline">
        View All
      </a>
    </div>
  );
};

export default CategoryTitle;