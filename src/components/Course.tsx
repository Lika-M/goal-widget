import { type FC, type PropsWithChildren } from "react";

type CourseProps = PropsWithChildren<{ title: string }>

const Course: FC<CourseProps> = ({ title, children }) => {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
                <button>Delete</button>
            </div>
        </article>
    );
}

export default Course;
