import React from 'react'

import "./authorisation.scss"

export default function Authorisation() {
  return (
    <div className='authorisation'>
        <div className="container">
            <h1>
                Авторизация
            </h1>
            <form action="">
                <input type="text" placeholder='Логин'/>
                <input type="text" placeholder='Пароль'/>
                <button className='custom-button'>Отправить</button>
            </form>
        </div>
    </div>
  )
}
