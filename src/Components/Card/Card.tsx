import React from 'react'
import './Card.css';

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src="https://images.unsplash.com/photo-1626430906533-8cb4ee3284a3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="something" />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptas!</p>
    </div>
  )
}

export default Card