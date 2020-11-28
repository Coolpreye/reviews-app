import React, { useState } from 'react';
import { reviews as people } from './data';

export const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const checkNumber = number => {
        if(number > people.length - 1) {
            return 0;
        } 
        if(number < 0) {
            return people.length - 1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex(index => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = () => {
        setIndex(index => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length);
        if(randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }


    return (
        <React.Fragment>
            <div className="mx-auto w-10/12 max-w-xl my-24">
                <h2 className="text-2xl sm:text-4xl text-center tracking-wider font-bold text-gray-800">Our Reviews</h2>
                <div className="flex justify-center">
                    <div className="h-1 w-16 sm:w-24 bg-blue-400 my-3"></div>
                </div>
                <div className="my-12 w-1/1">
                <div className="bg-white w-full rounded-sm shadow-md hover:shadow-lg transition ease-in-out mt-8 p-5">
                        <img src={image} alt="person" className="rounded-full w-40 h-40 mx-auto mt-2 object-cover" />
                        <h4 className="text-gray-800 mt-6 mb-1 text-center font-semibold tracking-wider">{name}</h4>
                        <h2 className="text-blue-400 tracking-wider font-medium text-center text-lg">{job}</h2>
                        <p className="text-center text-gray-400 text-sm mt-3">{text}</p>
                        <div className="w-10/12 sm:w-3/12 mx-auto text-center mt-4">
                            <i className="material-icons text-blue-400 text-4xl cursor-pointer" onClick={prevPerson}>chevron_left</i>
                            <i className="material-icons text-blue-400 text-4xl cursor-pointer" onClick={nextPerson}>chevron_right</i>
                        </div>
                        <div className="bg-blue-50 text-center text-blue-400 w-24 mx-auto my-4 p-1 text-sm max-w-xs cursor-pointer" onClick={randomPerson}>Surprise Me</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
