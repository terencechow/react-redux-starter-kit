import React from 'react'

export const OtherPage = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Other Page, counter is: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.decrement}>
      Decrement
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.halfAsync}>
      Half (Async)
    </button>
  </div>
)

OtherPage.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  halfAsync : React.PropTypes.func.isRequired,
  decrement   : React.PropTypes.func.isRequired
}

export default OtherPage
