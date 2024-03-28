import { type FC, type PropsWithChildren, type ReactNode} from "react";

// type CourseProps = {
//     title: string;
//     children: ReactNode;
// }

// interface CourseProps {
//     title: string;
//     children: ReactNode;  
// }

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

// export default function C({ title, children }: CourseProps) {
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//                 <button>Delete</button>
//             </div>
//         </article>
//     );
// }