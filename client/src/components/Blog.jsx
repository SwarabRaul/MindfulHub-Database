import React from 'react'
import { useParams } from 'react-router-dom'

const DUMMY_VALUE = [
    {key: "1",title: "The Art of Minimalist Living", desc: "Explore the principles of minimalist living, decluttering your space, and simplifying your life. Learn how to create a serene and organized home that promotes peace and mindfulness.", author: "Swarab Raul"},
    {key: "2",title: "Mastering the Basics of Healthy Cooking", desc: "If you're looking to improve your culinary skills and adopt a healthier lifestyle, this blog post is for you. Learn about essential cooking techniques, ingredient substitutions, and simple recipes to kickstart your journey towards better nutrition.", author: "Swarab Raul"}
]

const Blog = () => {

    const { id } = useParams();

  return (
    <div>
        <h1>{DUMMY_VALUE[id-1].title}</h1>
        <h4>{DUMMY_VALUE[id-1].desc}</h4>
        <h5>{DUMMY_VALUE[id-1].author}</h5>
    </div>
  )
}

export default Blog