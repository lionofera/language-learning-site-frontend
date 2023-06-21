import React from 'react';
import { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allcourses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div>

            
            {
                courses.map(c => <SingleCourse
                key={c.cat_id}
                c={c}
                ></SingleCourse>)
            }
        </div>
    );
};

export default Home;