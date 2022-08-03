import React, {useState} from "react";
import people from './data';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Reviews = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (number) => {

        /* if reached lastIndex then get First index */
        if (number > people.length - 1){
            return 0;
        }

        /* if reached firstIndex then get Last index */
        if (number < 0){
            return people.length - 1;
        }
        return number;
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    };

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    };

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if (randomNumber === index){
            randomNumber = randomNumber + 1;
        }
        console.log(randomNumber)
        setIndex(checkNumber(randomNumber));
    }

    return <article className='review'>
        <div className='img-container'>
            <img src={image} alt={name} className='person-img' />
        <div className='quote-icon'>
            <FaQuoteRight />
        </div>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='button-container'>
            <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
            </button>
            <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight />
            </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
}

export default Reviews;