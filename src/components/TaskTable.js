"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown ,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateTask from "./createTaskForm"
import { useRef } from "react";


const TaskTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [tasks, setTasks] = useState([
    {
      id: 1,
      client: "Jungle morels",
      project: "Office Operations",
      subject: "Making salaries",
      createdBy: "Suraj Poswal",
      assignedTo: "Aman Negi",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "6:43 pm",
      status: "Open",
    },
    {
      id: 2,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Deepanshu Negi",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
    {
      id: 3,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Self",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
    {
      id: 4,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Self",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
    {
      id: 5,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Self",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
    {
      id: 6,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Self",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
    {
      id: 7,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Self",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
    {
      id: 8,
      client: "CH BZR",
      project: "Character Bazaar",
      subject: "Work on Add",
      createdBy: "Self",
      assignedTo: "Vishal Bisht",
      startDate: "21/03/25",
      
      deadline: "24/03/25",
      time: "10:11 am",
      status: "Open",
    },
  ]);

  const statuses = ["Done", "Pending", "Late", "In Review", "Open"];

  const [selectedStatus, setSelectedStatus] = useState("Open");
  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(tasks.length + 1);
  const [showOPtion, setShowOption] = useState(null);
  const [showCalender, setShowCalender] = useState(false)
  const [activePicker, setActivePicker] = useState({ id: null, field: null });
  const [searchTerm, setSearchTerm]= useState("")
  const [showSuggstion, setShowSuggstion] = useState(false)
  const [highlightedRow, setHighlightedRow] = useState(null);


// Create a ref object to store refs for each task row
const rowRefs = useRef({});


  const [newTask, setNewTask] = useState({
    client: "",
    project: "",
    subject: "",
    createdBy: "",
    assignedTo: "",
    startDate: "",
    time: "",
    deadline: "",
    status: "Open",
  });

  const statusHandler = (id, newStatus) => {
    // console.log(id);
    // console.log(newStatus);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({
      id: count,
      client: "",
      project: "",
      subject: "",
      createdBy: "",
      assignedTo: "",
      startDate: "",
      time: "",
      deadline: "",
      status: "Open",
    });
    setTasks([...tasks, newTask]);
    setCount(count + 1);
    setShowForm(false);

    console.log(count);
  };

  const handleClose = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const handleChildData = (data)=>{
    setTasks((prev) => [...prev, data]); 
  }
  const handlehiddeForm =() =>{
    setShowForm(false)
  }

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setShowSuggstion(true);
    } else {
      setShowSuggstion(false);
    }
  }, [searchTerm]);

  const filteredSuggestions = tasks.filter(task =>
    task.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <>
    {showForm &&
     <div className="absolute w-[100vw] h-fit flex justify-center items-center">
     <CreateTask
        onData={handleChildData}
        onClose={handlehiddeForm}/>
   </div>
    }
   
    
    <div className="flex relative mx-auto ">
      
      <div className="  mx-auto w-7xl">
        {/* Search Bar */}
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <p className=" pr-2 text-lg font-semibold">Search :</p>
            <input

              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
              placeholder="Search task..."
              className="w-96 py-1 pl-6 px-1 border border-none bg-gray-200 rounded-full focus:outline-none focus:ring-2"
            /> 
          </div>
          { searchTerm &&
          <div className="w-96 max-h-[200px] overflow-y-auto rounded-[15px] absolute top-[5vh] left-[11vw] py-2 bg-white border-2 border-[#ffba00] z-50 shadow-md">
          {filteredSuggestions.map((suggestion, i) => (
            <div
              key={i}
              onClick={() => {
                setSearchTerm(suggestion.subject);  // Or project/client etc.
                setShowSuggstion(false);

                const targetRow = rowRefs.current[suggestion.id];
                if (targetRow) {
                  targetRow.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                  });
                }
                // 👇 Highlight row for some time
                setHighlightedRow(suggestion.id);
                setTimeout(() => {
                  setHighlightedRow(null);
                }, 2000); // highlight for 2 seconds
              }}
              className="cursor-pointer px-4 py-2 hover:bg-[#ffba00]  transition-all"
            >
              {suggestion.client} - {suggestion.project}
            </div>
          ))}
          {filteredSuggestions.length === 0 && (
            <div className="text-center text-gray-600 py-2">No results found.</div>
          )}
        </div>

          }
          

          
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-200 "
            >
              Create Task
            </button>
          </div>
        </div>

        
       

        {/* Task Table */}
        <div className="h-[44vh] w-fit overflow-y-auto scroll scrollbar">
          <div className=" rounded-[20px] border-2 border-[#ffba00] h-[44vh] me-2 overflow-x-hidden">
          <table className="  text-center w-7xl " style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead className=" text-sm">
              <tr className="text-[1rem]">
                {[
                  "S no.",
                  "Client",
                  "Project Name",
                  "Subject",
                  "Created By",
                  "Assign To",
                  "Start Date",
                  "Deadline",
                  "Time",
                  "Status",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="border border-[#ffba00] px-4 py-2"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="w-8xl text-sm">
              {tasks.map((task, index) => (
                <tr key={task.id} className={`bg-white hover:bg-yellow-100 ${
                  highlightedRow === task.id ? "bg-yellow-300 animate-pulse" : ""
                }`} ref={(el) => (rowRefs.current[task.id] = el)} >
                  
                  <td className="border-2 border-[#ffba00] px-4 py-1 ">
                    {index + 1}
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1 ">
                    {task.client}
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1 ">
                    {task.project}
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1 ">
                    {task.subject}
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1 ">
                    {task.createdBy}
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1 ">
                    <span className="bg-blue-500 text-sm block  text-white px-3 py-1 rounded-full">
                      {task.assignedTo}
                    </span>
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1">
                    {task.startDate}
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      onClick={() => setActivePicker({ id: task.id, field: "startDate" })}
                      className="text-yellow-600 cursor-pointer lg:ms-1.5"
                     />

                      {activePicker.id === task.id && activePicker.field === "startDate" && (
                        <div className="absolute z-50 mt-2">
                          <DatePicker
                            selected={new Date()}
                            onChange={(date) => {
                              const formattedDate = date.toLocaleDateString("en-GB");
                              setTasks((prev) =>
                                prev.map((t) =>
                                  t.id === task.id ? { ...t, startDate: formattedDate } : t
                                )
                              );
                              setActivePicker({ id: null, field: null });
                            }}
                            inline
                          />
                        </div>
                      )}
                  </td>
                  <td className="border-2 border-[#ffba00] px-4 py-1">
                    {task.deadline}
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      onClick={() => setActivePicker({ id: task.id, field: "deadline" })}
                      className="text-yellow-600 cursor-pointer lg:ms-1.5"
                     />
                     {activePicker.id === task.id && activePicker.field === "deadline" && (
                        <div className="absolute z-50 mt-2">
                          <DatePicker
                            selected={new Date()}
                            onChange={(date) => {
                              const formattedDate = date.toLocaleDateString("en-GB");
                              setTasks((prev) =>
                                prev.map((t) =>
                                  t.id === task.id ? { ...t, deadline: formattedDate } : t
                                )
                              );
                              setActivePicker({ id: null, field: null });
                            }}
                            inline
                          />
                        </div>
                      )}
                  </td>
                  
                  <td className="border-2 border-[#ffba00] px-4 py-1">
                  {task.time} 
                  </td>
                 
                  <td className="border-2 border-[#ffba00] px-1 relative">
                    <span
                      className={`text-white px-2 py-1 rounded-full cursor-pointer text-center ${
                        task.status === "Done"
                          ? "bg-green-500"
                        : task.status === "Pending"
                          ? "bg-purple-500"
                          : task.status === "Late"
                          ? "bg-red-500"
                          : task.status === "Open"
                        ? "bg-[#ffba00]"
                          : task.status === "In Review"
                          ? "bg-blue-500"
                          : "bg-gray-500"
                        }`}
                      onClick={() => setShowOption(task.id)} // Change to task.id based logic
                    >
                      {task.status} <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                 
                  {showOPtion === task.id && (
                   <div className="border mt-1 left-[-50%] shadow-md w-max text-center bg-[#616262] rounded-[20px]  text-white px-4py-1 py-2 text-lg px-[1.5rem] absolute z-9 flex flex-col items-center">
                     {statuses.map((status) => (
                       <div
                          key={status}
                          onClick={() => {
                            statusHandler(task.id, status);
                            setShowOption(null);
                          }}
                          className="cursor-pointer py-1 text-sm px-[3rem] w-full hover:bg-[#ffba00] hover:rounded-full"
                        >
                          {status}
                        </div>
                      ))}
                     </div>
                    )}
                  </td>

                  <td className="border-2 border-[#ffba00] px-4 py-1">
                    <button
                      onClick={() => handleClose(task.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-full text-sm  hover:bg-red-700 transition duration-200 cursor-pointer"
                    >
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
    </div>
    </>
  );
};

export default TaskTable;
