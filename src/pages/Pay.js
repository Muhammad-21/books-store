import React, { useEffect } from 'react'
import Confetti from 'react-confetti';
import {useNavigate } from 'react-router-dom'
import { useWindowSize } from 'react-use';

export default function Pay() {
    const navigate = useNavigate();
    const { width, height } = useWindowSize()
    useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 5000)
      }, [])
  return (
    <div>
    <div className="pay">
        <div>
            <h2 style={{color:"#55e720"}}>Покупка прошла успешно ⁣ &#128521;</h2>
            <p style={{marginLeft:"10px"}}>перенаправляю на главную страничку ...</p>
        </div>
    </div>
    <Confetti
              width={width}
              height={height}
              colors={['#55e720','orange']}
              numberOfPieces={300}
            />
    </div>
  )
}
