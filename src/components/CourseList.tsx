import { type FC } from "react";

import SingleCourse from "./SingleCourse.tsx";
import { type Course } from "../App";

type CorseListProps = {
    courses: Course[];
    onDelete: (id: number) => void;
}

const CourseList: FC<CorseListProps> = ({ courses, onDelete }) => {

    return (
        <ul>
            <li>
                <article>
                    <h2>Informatics Practices</h2>
                    <p>Retrieve and manipulate data using Structured Query Language. Identify the Emerging trends in the fields of Information Technology.</p>
                    <button onClick={(e) => (e.target as HTMLElement).parentElement!.parentElement!.style.display = 'none' }>Delete</button>
                </article>
            </li>
            {courses.map(c =>
                <li key={c.id}>
                    <SingleCourse title={c.title} id={c.id} onDelete={onDelete} >
                        <p>{c.description}</p>
                    </SingleCourse>
                </li>)}
        </ul>
    );
}

export default CourseList;