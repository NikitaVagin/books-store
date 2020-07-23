import React from 'react';
import './error-indicator.css';
import IconError from './alarm-icon.svg';


const ErrorIndicator = () => {
    return(
        <div className='alert alert-dismissible alert-warning'>
            <img src={IconError} alt='error-icon'/>
            <span className='boom'><strong>BOOOM!</strong> Что-то пошло трагически не так! Мы уже знаем о проблеме и попытаемся решить ее в ближайшее время...</span>
        </div>
    )
}

export default ErrorIndicator;