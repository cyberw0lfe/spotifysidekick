const React = require('react')

// onMouseEnter and onMouseLeave for hover effects

const style = {
  backgroundColor: 'green',
  color: 'white',
  fontSize: '12px',
  padding: '10px 24px',
  borderRadius: '8px',
  // border: '2px solid white',
  margin: '15px',
}

export default (props) => (
  <button style={style}>{props.text}</button>
)