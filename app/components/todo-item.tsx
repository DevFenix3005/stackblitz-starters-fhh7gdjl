interface TodoItemProps {
    id: number;
    title: string;
    description: string;
}

export default function TodoItem({ id, title, description }: TodoItemProps) {
    return (
        <li
            key={id}
            className="p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out flex items-center justify-between"
        >
            <div>
                <p className="font-semibold text-blue-600">{title}</p>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </li>
    );


}