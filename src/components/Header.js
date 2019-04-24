import React from 'react'
import PropTypes from 'prop-types'

// -----------END--OF--IMPORTS------------------

const Header = (props) => (
  <header className={'top'}>
    <h1>
      ta
      <span>
        <img className={'logo'} src={'https://i.imgur.com/5b9LX3h.png'} alt={''} />
      </span>
      da!
    </h1>
    <h3 className={'tagline'}>
      <span>
        {props.tagline}
      </span>
    </h3>
  </header>
)
Header.propTypes = {
  tagline: PropTypes.string.isRequired,
}
export default Header
