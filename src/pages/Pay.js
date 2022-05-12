import React, { useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

export default function Pay() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
          navigate('/')
        }, 3000)
      }, [])
  return (
    <div className="pay">
        <div>
            <h2 style={{color:"#55e720"}}>Покупка прошла успешно ⁣ &#128521;</h2>
            <p style={{marginLeft:"10px"}}>перенаправляю на главную страничку ...</p>
        </div>
    </div>
  )
}
