import React from 'react';

const PricingPage = () => {
  return (
    <div className="snap-center h-screen w-screen flex">
      <div className="max-w-4xl mx-auto px-5 py-36">
        <h1 className="text-4xl font-bold mb-8">Choose a Plan:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-neutral shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Basic - <span className='text-green-400 text-3xl' >15</span> test</h2>
            <p className="text-neutral-content mb-4">Get 15 tests on all available stocks and cryptos.</p>
            <p className="text-3xl font-bold mb-6">$10</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="bg-neutral shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Standard - <span className='text-green-400 text-3xl' >65</span> test</h2>
            <p className="text-neutral-content mb-4">Get 65 tests on all available stocks and cryptos.</p>
            <p className="text-3xl font-bold mb-6">$50</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="bg-neutral shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pro - <span className='text-green-400 text-3xl' >100</span> test</h2>
            <p className="text-neutral-content mb-4">Get 100 tests on all available stocks and cryptos..</p>
            <p className="text-3xl font-bold mb-6">$100</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
