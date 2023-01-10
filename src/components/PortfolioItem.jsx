import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div class='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md'>
      <img src={imgUrl} alt='Portfolio Item' class='rounded-t-lg' />
      <div>
        <h3 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
          {title}
        </h3>
        <p class='mb-3 font-normal dark:text-gray-400'>
          {stack.map((item) => (
            <span>{item}</span>
          ))}
        </p>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
}

export default PortfolioItem;
