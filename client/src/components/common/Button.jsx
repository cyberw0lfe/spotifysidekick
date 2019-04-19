const React = require('react')

// onMouseEnter and onMouseLeave for hover effects

const style = {
  backgroundColor: 'green',
  color: 'white',
  fontSize: '18px',
  maxWidth: '400px',
  padding: '10px 24px',
  borderRadius: '8px',
}

export default (props) => (
  <button style={style} onClick={props.onClick}>{props.text}</button>
)