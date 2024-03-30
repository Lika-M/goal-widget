import { FormEvent, useRef } from "react";

type AddFormProps = {
    addCourse: ({ title, summary }: { title: string, summary: string }) => void;
}

export default function AddForm({ addCourse }: AddFormProps) {

    const title = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredTitle = title.current!.value;
        const enteredSummary = summary.current!.value;

        event.currentTarget.reset();
        addCourse({title: enteredTitle, summary: enteredSummary});
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">YOUR COURSE</label>
            <input id="title" type="text" ref={title} />

            <label htmlFor="summary">SHORT SUMMARY</label>
            <input id="summary" type="text" ref={summary} />

            <button>Add Course</button>
        </form>
    );
}