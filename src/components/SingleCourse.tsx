import { type FC, type PropsWithChildren } from "react";

type CourseProps = PropsWithChildren<{ title: string, id:number, onDelete (id:number):void }>

const SingleCourse: FC<CourseProps> = ({ title, id, onDelete, children }) => {
    return (
        <article>
            <h2>{title}</h2>
            {children}
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}

export default SingleCourse;
