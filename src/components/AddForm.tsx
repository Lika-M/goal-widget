import { FormEvent } from "react";

type AddFormProps = {
    addCourse: ({ title, summary }: { title: string, summary: string }) => void;
}

type EnteredData = {
   title: string; 
   summary: string ;
}
export default function AddForm({ addCourse }: AddFormProps) {

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const enteredData: EnteredData = {
            title: formData.get("title") as string,
            summary: formData.get("summary") as string
        };
        console.log(enteredData);

        event.currentTarget.reset();
        addCourse(enteredData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title"></label>
            <input id="title" type="text" name="title" />

            <label htmlFor="summary"></label>
            <input id="summary" type="text" name="summary" />

            <button>Add Course</button>
        </form>
    );
}