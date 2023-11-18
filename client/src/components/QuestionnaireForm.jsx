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
    const [mentalStatus, setMentalStatus] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const questions = [
        "Have you been able to not concentrate on what you are doing?",
        "Have you recently lost much sleep over worry?",
        "Have you recently felt you were not playing a useful part in things?",
        "Have you recently felt not capable of making decisions about things?",
        "Have you recently felt constantly under strain?",
        "Have you felt you couldn't overcome your difficulties",
        "Have you not been able to enjoy your normal day-to-day activities",
        "Have you not  been able to face up to your problems?",
        "Have you recently been feeling unhappy and depressed?",
        "Have you recently been losing confidence in yourself?",
    ];
     const options = [
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
        ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    ];

    const handleChange = (questionIndex, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [questionIndex + 1]: value,
        }));
    };
    const handleSubmit = () => {
        const totalPoints = Object.values(formData).reduce((acc, value) => acc + calculatePoints(value), 0);

        let status;
        if (totalPoints >= 50) {
            status = "Congratulations on your outstanding performance in the mental test! Your results are truly exceptional, reflecting a high level of intelligence and proficiency. Your strengths shine through, showcasing your impressive capabilities. Keep up the exceptional work, and consider using your talents to explore new challenges and opportunities. The sky's the limit for someone with your remarkable abilities!";
        } else if (totalPoints >= 30) {
            status = "Great job on your mental test! Your results are solid and indicate a good grasp of the material. You've demonstrated commendable skills and understanding. Recognize your strengths, and consider using this foundation to further develop in areas that interest you. With continued dedication and curiosity, you're well on your way to achieving even greater success.You can use this website to achieve or to improve your overall wellness. Keep up the good work!";
        } else if (totalPoints >= 20) {
            status = "Congratulations on completing the mental test! Your results indicate that you have many strengths, and your performance is solid overall. Like everyone, there are areas where you can further enhance your skills, and that's a wonderful opportunity for growth. Focus on those specific points for improvement, and remember that progress is a journey. Your current achievements are commendable, and with a bit of targeted effort, you'll undoubtedly excel even more.You can use this website to achieve or to improve your overall wellness.Keep up the great work!";
        } else {
            status = "While the results of your mental test may not be what you were hoping for, remember that everyone faces challenges.You can use this website as an opportunity for self-reflection and growth. Identify specific areas that need improvement and create a plan to address them. Remember that setbacks are a natural part of the learning process. Seek support, whether from peers, mentors, or resources, and approach this as a chance to learn and improve. You have the resilience to turn things around with dedication and effort. Keep moving forward!";

        setMentalStatus(status);
        setFormSubmitted(true);
    };
    const calculatePoints = (value) => {
        switch (value) {
            case "Strongly Agree ":
                return 1;
            case "Agree":
                return 2;
            case "Neutral":
                return 3;
            case "Disagree":
                return 4;
            case "Strongly Disagree":
                return 5;
            default:
                return 0;
        }
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
                        {/* {[1, 2, 3, 4, 5].map((value) => ( */}
                        {options[index].map((option, value) => (
                            <label key={value}>
                                <input
                                    type="radio"
                                    value={option}
                                    checked={formData[index + 1] === option}
                                    onChange={() => handleChange(index, option)}
                                />
                                {option}
                            </label>
                        ))}
                         <hr />
                    </div>
                ))}

                {/* <ButtonComponent  onClick={handleSubmit} /> */}
                <button className="btn_qn" type="button" onClick={handleSubmit}>
                    Submit
                </button>
                {formSubmitted && (
                    <div>
                        <h2>Mental Status:</h2>
                        <p>{mentalStatus}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default QuestionnaireForm;
