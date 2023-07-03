import React from 'react'
import Styles from './spinner-style.scss'
import PropTypes from 'prop-types'
type Props = React.HTMLAttributes<HTMLElement>

const Spinner = (props: Props) => {
  return <div {...props} className={[Styles.spinner, props.className].join(' ')} ></div>
}

Spinner.propTypes = {
  className: PropTypes.string
}

export default Spinner
