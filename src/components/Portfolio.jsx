import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
  return (
    <div class='flex flex-col items-center'>
      <div>
        {portfolio.map((project) => (
          <span>
            <PortfolioItem
              title={project.title}
              imgUrl={project.imgUrl}
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
