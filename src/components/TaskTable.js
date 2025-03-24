const TaskTable = () => {
    const tasks = [
        { id: 1, client: "Jungle morels", project: "Office Operations", subject: "Making salaries", createdBy: "Suraj Poswal", assignedTo: "Aman Negi", startDate: "21/03/25", time: "6:43 pm", deadline: "24/03/25", status: "Open" },
        { id: 2, client: "CH BZR", project: "Character Bazaar", subject: "Work on Add", createdBy: "Self", assignedTo: "Vishal Bisht", startDate: "21/03/25", time: "10:11 am", deadline: "24/03/25", status: "Open" },
        { id: 3, client: "AMD", project: "Amazdraw Website", subject: "Running Campaign", createdBy: "Suraj Poswal", assignedTo: "Vishal Bisht", startDate: "23/03/25", time: "12:01 pm", deadline: "28/03/25", status: "Late" },
        { id: 4, client: "Jungle morels", project: "Jungle Morels", subject: "Jingle 21", createdBy: "Aman Negi", assignedTo: "Rahul Saini", startDate: "22/03/25", time: "3:43 pm", deadline: "24/03/25", status: "In review" },
        { id: 5, client: "CH BZR", project: "Character Bazaar", subject: "Animation Animal", createdBy: "Suraj Poswal", assignedTo: "Nilesh Raj", startDate: "21/03/25", time: "6:43 pm", deadline: "24/03/25", status: "In review" },
        { id: 6, client: "D Consolation", project: "Hindi Animation", subject: "Path 1 Subah Savera", createdBy: "Aman Negi", assignedTo: "Mogo", startDate: "21/03/25", time: "6:43 pm", deadline: "24/03/25", status: "In review" },
        { id: 7, client: "E-Creations", project: "EVS Project", subject: "Our Senses", createdBy: "Geeta Poswal", assignedTo: "Vishal Bisht", startDate: "21/03/25", time: "6:43 pm", deadline: "24/03/25", status: "Open" }
    ];

    return (
        <div className="flex">
        <div className="  mx-auto">
            {/* Search Bar */}
            <div className="mb-3 flex items-center">
                <p className=" pr-2 text-lg font-semibold">Search :</p>
                <input
                    placeholder="Search task..."
                    className="w-96 py-1 pl-6 px-1 border border-none bg-gray-200 rounded-full focus:outline-none focus:ring-2"
                />
            </div>

            {/* Task Table */}
            <div className=" overflow-hidden ">
                <table className="border border-yellow-500 text-center">
                    <thead className="bg-yellow-500">
                        <tr>
                            {[ "S no.", "Client", "Project Name", "Subject", "Created By", "Assign To", "Start Date", "Time", "Deadline", "Status", "Action" ].map((heading) => (
                                <th key={heading} className="border border-yellow-500 px-4 py-2">{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={task.id} className="bg-white hover:bg-yellow-100">
                                <td className="border border-yellow-500 px-4 py-1">{index + 1}</td>
                                <td className="border border-yellow-500 px-4 py-1">{task.client}</td>
                                <td className="border border-yellow-500 px-4 py-1">{task.project}</td>
                                <td className="border border-yellow-500 px-4 py-1">{task.subject}</td>
                                <td className="border border-yellow-500 px-4 py-1">{task.createdBy}</td>
                                <td className="border border-yellow-500 px-4 py-1">
                                    <span className="bg-blue-500 text-sm block  text-white px-3 py-1 rounded-full">
                                        {task.assignedTo}
                                    </span>
                                </td>
                                <td className="border border-yellow-500 px-4 py-1">{task.startDate}</td>
                                <td className="border border-yellow-500 px-4 py-1">{task.time}</td>
                                <td className="border border-yellow-500 px-4 py-1">{task.deadline}</td>
                                <td className="border border-yellow-500 px-4 py-1">
                                    <span className={` text-sm px-3 py-1 w-full block rounded-full text-white ${task.status === "Open" ? "bg-yellow-500" :
                                            task.status === "Late" ? "bg-gray-700" :
                                                "bg-blue-400"
                                        }`}>
                                        {task.status}
                                    </span>
                                </td>
                                <td className="border border-yellow-500 px-4 py-1">
                                    <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm  hover:bg-red-700 transition duration-200 cursor-pointer">
                                        Close
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default TaskTable;
