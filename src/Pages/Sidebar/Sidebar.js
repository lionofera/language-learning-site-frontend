import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h4>Our courses: {courses.length}</h4>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link  to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;