import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return (
    <div class='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {portfolio.map((project) => (
          <span>
            <PortfolioItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
