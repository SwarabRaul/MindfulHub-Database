import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import './../styles/QuestionnaireForm.css'

const QuestionnaireForm = () => {
    const [formData, setFormData] = useState({
        1: 3,
        2: 3,
        3: 3,
        4: 3,
        5: 3,
        6: 3,
        7: 3,
        8: 3,
        9: 3,
        10: 3,
    });

    const questions = [
        "How satisfied are you with the user interface of MindfulHub?",
        "Rate the ease of navigation on the platform.",
        "How likely are you to recommend MindfulHub to a friend or colleague?",
        "Rate the overall performance of the platform.",
        "How satisfied are you with the available features?",
        "Rate the responsiveness of customer support.",
        "How comfortable do you feel using MindfulHub?",
        "Rate the visual appeal of the platform.",
        "How well does MindfulHub meet your expectations?",
        "Rate your overall experience with MindfulHub.",
    ];

    const handleChange = (questionIndex, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [questionIndex + 1]: value,
        }));
    };


    const handleSubmit = async () => {

    };

    return (

        <div className='Box_qn'>
                <h1>Test</h1>
                <h4>
                    Your mental well-being is important to us.
                    Please take a moment to answer the following questions to help us provide you with relevant information and support.
                    Your responses are completely anonymous.
                </h4>
            <form className='Form_qn'>
                {questions.map((question, index) => (
                    <div key={index} className='div_qn'>
                        <label>{`${index + 1}. ${question}`}</label>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <label key={value}>
                                <input
                                    type="radio"
                                    value={value}
                                    checked={formData[index + 1] === value}
                                    onChange={() => handleChange(index, value)}
                                />
                                {value}
                            </label>
                        ))}
                         <hr />
                    </div>
                ))}

                {/* <ButtonComponent  onClick={handleSubmit} /> */}
                <button className="btn_qn" type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default QuestionnaireForm;
