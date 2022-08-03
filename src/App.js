import React from 'react';
import Reviews from './Reviews.js';

function App(){

  return (
      <main>
          <section className='container'>
              <div className='title'>
                  <h4>our reviews</h4>
                  <div className='underline'/>
              </div>
              <Reviews />
          </section>
      </main>
  )

}

export default App;