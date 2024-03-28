import { type FC, type PropsWithChildren } from "react";

type CourseProps = PropsWithChildren<{ title: string }>

const Course: FC<CourseProps> = ({ title, children }) => {
    return (
        <article>
            <h2>{title}</h2>
            {children}
            <button>Delete</button>
        </article>
    );
}

export default Course;
