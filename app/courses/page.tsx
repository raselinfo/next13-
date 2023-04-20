import {Suspense} from 'react';
import Courses from '../components/Courses';

const CoursesPage = () => {
    return (
        <div>
            <Suspense fallback={<h1>Course loading...</h1>}>

            <Courses/>
            </Suspense>
        </div>
    );
};

export default CoursesPage;