import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()

  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="search-box-container">
      <form onSubmit={submitHandler} className="search-box-form">
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="search-box-input"
        />
        <button type="submit" className="search-box-button">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <style>
        {`
          .search-box-container {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
          }

          .search-box-form {
            display: flex;
            align-items: center;
            border: 2px solid #00bcd4; /* Жасыл-көк шекара */
            border-radius: 25px;
            overflow: hidden;
            width: 250px; /* Контейнер ені азайтылды */
            background-color: #fff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Жұмсақ көлеңке */
          }

          .search-box-input {
            flex: 1;
            border: none;
            outline: none;
            padding: 8px 12px;
            font-size: 14px; /* Қаріп өлшемі */
            color: #333;
          }

          .search-box-input::placeholder {
            color: #aaa; /* Placeholder түсі */
          }

          .search-box-button {
            background-color: transparent;
            border: none;
            padding: 8px;
            cursor: pointer;
            color: #00bcd4;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
            border-radius: 50%; /* Дөңгелек */
            height: 36px;
            width: 36px;
          }

          .search-box-button:hover {
            background-color: #00bcd4; /* Ховер кезінде фон түсі өзгереді */
            color: #fff; /* Белгіше түсі өзгереді */
            transform: scale(1.2); /* Аздап үлкейеді */
          }

          .search-box-button i {
            margin: 0; /* Белгішенің дұрыс орталықта орналасуы */
          }
        `}
      </style>
    </div>
  )
}

export default SearchBox
