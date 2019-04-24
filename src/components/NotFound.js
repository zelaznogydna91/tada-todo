import React from 'react'
import notFoundGif from '../css/images/snape-not-found.gif'

// -----------END--OF--IMPORTS------------------

const NotFound = () => (
  <div>

    <div>
      <img
        alt={'not-found'}
        src={notFoundGif}
        style={{
          width:   '100%',
          padding: '2% 28% 1% 28%',
        }}
      />
    </div>
    <h2>
      URL NOT FOUND!
    </h2>
    <div style={{ textAlign: 'center', fontSize: '8rem' }}>
      <span role={'img'} aria-label={'mage-male'}>🧙🏻‍♂️</span>
      <span role={'img'} aria-label={'lightning'}>⚡</span>
      <span role={'img'} aria-label={'question'}>❓</span>
    </div>
  </div>
)

export default NotFound
