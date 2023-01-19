import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div class='border-2 bg-white border-gray-900 rounded-lg shadow-md m-1'>
      <img
        src={imgUrl}
        alt='Portfolio Item'
        class='h-[400px] w-[400px] rounded-md'
      />
      <div className='grid w-full p-3 justify-center'>
        <h3 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center'>
          {title}
        </h3>
        <p class='flex gap-2 text-sm lg:text-base'>
          {stack.map((item) => (
            <span className='px-2 py-1 border-2 border-gray-900 rounded-md'>
              {item}
            </span>
          ))}
        </p>
        <a
          href={link}
          class='px-2 py-1 m-1 border-2 border-gray-300 rounded-md text-center hover:bg-green-500 hover:border-green-600'
        >
          Go to Project
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
