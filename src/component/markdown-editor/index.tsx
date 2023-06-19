import './style.css'

export default function MarkdownEditor() {

    return (
        <div className="flex flex-col w-full">
            <div id="title" className="text-2xl font-bold w-full outline-none break-words break-keep empty:text-neutral-300" placeholder="Untitled" contentEditable></div>
            <div id="body" className="my-4">

            </div>
        </div>
    )
}