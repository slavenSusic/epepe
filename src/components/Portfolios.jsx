import { useState } from 'react';
import { portfolioCategories } from '../hooks/portfolio';

function Portfolios() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioCategories);

  const handleFilterAll = () => {
    setSelectedCategory('all');
    setFilteredItems(portfolioCategories);
  };

  const handleFilterWeb = () => {
    setSelectedCategory('Web');
    const filteredItems = portfolioCategories.filter(item => item.category === 'Web');
    setFilteredItems(filteredItems);
  };

  const handleFilterDrustvene = () => {
    setSelectedCategory('Drustvene');
    const filteredItems = portfolioCategories.filter(item => item.category === 'Drustvene');
    setFilteredItems(filteredItems);
  };

  return (
    <div className='prose-xl'>
      <section class="px-20 pt-52">
        <h4 class="text-gray-800 font font-bold">Portfolio @ epepe</h4>
        <h1 class="font-bold">Pogledaj naše radove</h1>
      </section>

      <div className='bg-gray-100 mx-2'>
        <>
          <div className='mt-56 flex items-center justify-center py-5 '>
            <button
              onClick={handleFilterAll}
              className={`mr-2 ${selectedCategory === 'all' ? 'text-red-500' : ''} active:text-red-500`}
            >
              All
            </button>
            <button
              onClick={handleFilterWeb}
              className={`mr-2 ${selectedCategory === 'Web' ? 'text-red-500' : ''} active:text-red-500`}
            >
              Web
            </button>
            <button
              onClick={handleFilterDrustvene}
              className={`mr-2 ${selectedCategory === 'Drustvene' ? 'text-red-500' : ''} active:text-red-500`}
            >
              Društvene
            </button>
  </div>
    <div className='grid md:grid-cols-2 gap-5 px-20'>
      

      {filteredItems.map((item) => {
        return (
          <div key={item.id} className='relative group '>
            <img src={item.src} alt='' className='h-full' />
            <a href={`project/${item.name.toLowerCase().replace(/\s/g, '-')}`}>
              <div className='w-full h-full hover:bg-black/30 z-20 absolute top-6 transition-all duration-500'>
                <p className='z-10 text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100'>
                  {item.name}
                </p>
              </div>
            </a>
           </div>
        );
      })}
    </div>
    </>
    </div>
    </div>
  );
}

export default Portfolios;
