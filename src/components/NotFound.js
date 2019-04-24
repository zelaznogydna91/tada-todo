import React from 'react'
import notFoundGif from '../css/images/snape-not-found.gif'

const NotFound = () => (
  <div>

    <div>
      <img
        alt={'not-found'}
        src={notFoundGif}
        style={{
          width:   '100%',
          padding: '5% 25% 1% 25%',
        }}
      />
    </div>
    <h2>
      URL NOT FOUND!
    </h2>
    <div style={{ textAlign: 'center', fontSize: '8rem' }}>
      <span role={'img'} aria-label={'woman-shruggin'}>🧙🏻‍♂️</span>
      <span role={'img'} aria-label={'lightning'}>⚡</span>
      <span role={'img'} aria-label={'question'}>❓</span>
    </div>
  </div>
)

export default NotFound
