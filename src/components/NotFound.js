import React from 'react'
import notFoundGif from '../css/images/notFound.gif'

const NotFound = () => (
  <div>

    <div
      style={{
        width:         '100%',
        height:        '100%',
        paddingBottom: '56%',
        position:      'relative',
      }}
    >
      <img
        alt={'not-found'}
        src={notFoundGif}
        style={{
          height:     '50%',
          left:       '50%',
          top:        '50%',
          marginLeft: '-25%',
          position:   'absolute',
          width:      '50%',
          marginTop:  '-25%',
        }}
      />
    </div>
    <h2 style={{ marginTop: '-20%' }}>
      URL NOT FOUND!
      <div>
        <span role={'img'} aria-label={'woman-shruggin'}>🤷</span>
        <span role={'img'} aria-label={'fishing-pole-and-fish'}>🎣</span>
        <span role={'img'} aria-label={'question'}>❓</span>
      </div>
    </h2>

  </div>
)

export default NotFound
