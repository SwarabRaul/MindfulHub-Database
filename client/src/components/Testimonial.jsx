import React, { useState, useEffect } from 'react';
import './Testimonial.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "I was struggling with anxiety for years, but thanks to the support I received, I'm now living a more peaceful life.",
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "Dealing with depression was tough, but the guidance I got has been a game-changer for my mental well-being.",
    },
    {
        id: 3,
        name: "Alice Johnson",
        text: "I'm grateful for the counseling I received; it helped me manage my stress and regain a positive outlook on life.",
    },
    {
        id: 4,
        name: "David Wilson",
        text: "As someone who faced bipolar disorder, the therapy I received has been transformative in managing my condition.",
    },
    {
        id: 5,
        name: "Emily Brown",
        text: "Mental health matters, and I found the strength to overcome my social anxiety through the wonderful support I received.",
    },
];


const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((activeIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000); // Auto-transition every 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="testimonial-container">
                        <div className="testimonial card">
                            <div className="card-body">
                                <h2 className="card-title">{testimonials[activeIndex].name}</h2>
                                <p className="card-text">{testimonials[activeIndex].text}</p>
                            </div>
                        </div>
                        <div className="navigation">
                            <button className="btn btn-primary" onClick={prevTestimonial}>
                                &lt; Previous
                            </button>
                            <button className="btn btn-primary" onClick={nextTestimonial}>
                                Next &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
