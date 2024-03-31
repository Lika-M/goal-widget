import { type ReactNode, type FC } from "react";

import InfoBox from "./InfoBox.tsx";
import SingleCourse from "./SingleCourse.tsx";
import { type Course } from "../App";

type CorseListProps = {
    courses: Course[];
    onDelete: (id: number) => void;
}

const CourseList: FC<CorseListProps> = ({ courses, onDelete }) => {
    // props contain only mode
    if (courses.length === 0) {
        return (
            <InfoBox mode="hint">
                You have not courses yet. Start adding some!
            </InfoBox>);
    }

    let warningBox: ReactNode;
    let rate: 'low' | 'medium' | 'high';

    //props contain mode and severity
    if (courses.length >= 3) {
        rate = 'low';
        if (courses.length >= 4) {
            rate = 'medium';
        }
        if (courses.length >= 5) {
            rate = 'high';
        }
        warningBox = (
            <InfoBox mode="warning" severity={rate}>
                You are collecting too much courses.
            </InfoBox>)
    }

    return (
        <>
            {warningBox}
            <ul>
                <li>
                    <article>
                        <h2>Informatics Practices</h2>
                        <p>Retrieve and manipulate data using Structured Query Language. Identify the Emerging trends in the fields of Information Technology.</p>
                        <button onClick={(e) => (e.target as HTMLElement).parentElement!.parentElement!.style.display = 'none'}>Delete</button>
                    </article>
                </li>
                {courses.map(c =>
                    <li key={c.id}>
                        <SingleCourse title={c.title} id={c.id} onDelete={onDelete} >
                            <p>{c.description}</p>
                        </SingleCourse>
                    </li>)}
            </ul>
        </>
    );
}

export default CourseList;