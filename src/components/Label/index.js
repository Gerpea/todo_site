import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ value }) => {
  return <div>{value}</div>
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Label
