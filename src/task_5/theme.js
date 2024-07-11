// Приложение для переключения темы сайта
// Создать приложение, позволяющее пользователю переключать между светлой и темной темой сайта.

import React from "react";
import { useDispatch, useSelector } from "react-redux";



// Функционал:

// Action types: TOGGLE_THEME.
// Actions: Создайте действие для переключения темы.
// Reducer: Реализуйте редьюсер, который обрабатывает это действие и изменяет тему в состоянии приложения.
// Component: Создайте компонент, который отображает переключатель для изменения темы сайта.


// Описание:

// Состояние: Для хранения текущей темы можно использовать логическую переменную (true для темной темы и false для светлой) или строку ("dark" или "light").

// Интерфейс: Ваш интерфейс может состоять из переключателя, который изменяет тему с светлой на темную и обратно.







const Thema = () => {
    const themaFlag = useSelector(state => state);
    const dispatch = useDispatch();

    const changeTheme = (e) => {
        dispatch({type: 'TOGGLE_THEME'})
        console.log(themaFlag);
        if(themaFlag){
            e.target.parentElement.parentElement.parentElement.style = 'background:white';
            e.target.parentElement.parentElement.style = 'background:white';
        }
        else{
            e.target.parentElement.parentElement.parentElement.style = 'background:black';
            e.target.parentElement.parentElement.style = 'background:black';
        }
        
    }
    
    return ( 
        <>
            <h1 style={themaFlag ?  {color: "white", background: 'black'}: {color: "black", background: 'white'}}>Произвольный текст</h1>
            <button style={themaFlag ?  {color: "black", background: 'white', borderColor: "black"}: {color: "white", background: 'black', borderColor: "white"}} onClick={changeTheme}>Сменить тему </button>
        </>
     );
}

export default Thema;