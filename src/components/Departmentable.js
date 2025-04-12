"use client";

import { useState, useEffect, useRef } from "react";
import CreateTask from "./createTaskForm";

const TaskTable = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Aman Negi",
      designation: "Team Head/ Lead Animator",
      department: "Animation",
      empLayer: "1st",
    },
    {
      id: 2,
      name: "Vishal Bisht",
      designation: "Team Head/ Lead Marketer",
      department: "Digital Marketing",
      empLayer: "1st",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(tasks.length + 1);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [highlightedRow, setHighlightedRow] = useState(null);
  const rowRefs = useRef({});

  const filteredSuggestions = tasks.filter(
    (task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNewUser = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: count,
        name: "",
        designation: "",
        department: "",
        empLayer: "",
        isNew: true,
      },
    ]);
    setCount(count + 1);
  };

  const handleChildData = (data) => {
    setTasks((prev) => [...prev, data]);
  };

  const handleHideForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setShowSuggestion(true);
    } else {
      setShowSuggestion(false);
    }
  }, [searchTerm]);

  return (
    <>
      {showForm && (
        <div className="absolute w-full h-fit flex justify-center items-center">
          <CreateTask onData={handleChildData} onClose={handleHideForm} />
        </div>
      )}

      <div className="flex relative mx-auto">
        <div className="mx-auto w-7xl">
          {/* Search Bar */}
          <div className="flex justify-between mb-3">
            <div className="flex items-center">
              <p className="pr-2 text-lg font-semibold">Search :</p>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search task..."
                className="w-96 py-1 pl-6 border bg-gray-200 rounded-full focus:outline-none focus:ring-2"
              />
            </div>

            {searchTerm && showSuggestion && (
              <div className="w-96 max-h-[200px] overflow-y-auto rounded-[15px] absolute top-[5vh] left-[11vw] py-2 bg-white border-2 border-[#ffba00] z-50 shadow-md">
                {filteredSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    onClick={() => {
                      setSearchTerm(suggestion.name);
                      setShowSuggestion(false);
                      const targetRow = rowRefs.current[suggestion.id];
                      if (targetRow) {
                        targetRow.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                      setHighlightedRow(suggestion.id);
                      setTimeout(() => setHighlightedRow(null), 2000);
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-[#ffba00] transition-all"
                  >
                    {suggestion.name} - {suggestion.designation}
                  </div>
                ))}
                {filteredSuggestions.length === 0 && (
                  <div className="text-center text-gray-600 py-2">
                    No results found.
                  </div>
                )}
              </div>
            )}

            <button
              onClick={() => setShowForm(true)}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-700"
            >
              Create Task
            </button>
          </div>

          {/* Table */}
          <div className="h-[40vh] w-fit overflow-y-auto scrollbar rounded-[20px] border-2 border-[#ffba00] ">
            <div className=" border-1 border-[#ffba00] ">
              <table className="text-center w-7xl">
                <thead className="text-sm">
                  <tr className="text-[1rem] bg-yellow-100">
                    <th className="border px-4 border-[#ffba00] py-2">S no.</th>
                    <th className="border px-4 border-[#ffba00] py-2">User</th>
                    <th className="border px-4 border-[#ffba00] py-2">Designation</th>
                    <th className="border px-4 border-[#ffba00] py-2">Department</th>
                    <th className="border px-4 border-[#ffba00] py-2">Emp. Layer</th>
                    <th className="border px-4 border-[#ffba00] py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {tasks.map((task, index) => (
                    <tr
                      key={task.id}
                      ref={(el) => (rowRefs.current[task.id] = el)}
                      className={`bg-white hover:bg-yellow-100 ${
                        highlightedRow === task.id
                          ? "bg-yellow-300 animate-pulse"
                          : ""
                      }`}
                    >
                      <td className="border px-4 py-1 border-[#ffba00]">{index + 1}</td>

                      {["name", "designation", "department", "empLayer"].map(
                        (field) => (
                          <td className="border px-4 py-1 border-[#ffba00]" key={field}>
                            {task.isNew || task.isEditing ? (
                              <input
                                value={task[field]}
                                onChange={(e) => {
                                  const updated = [...tasks];
                                  updated[index][field] = e.target.value;
                                  setTasks(updated);
                                }}
                                className="w-full px-2 py-1 border rounded"
                              />
                            ) : (
                              task[field]
                            )}
                          </td>
                        )
                      )}

                      <td className="border px-4 py-1 border-[#ffba00]">
                        {task.isNew || task.isEditing ? (
                          <button
                            onClick={() => {
                              const updated = [...tasks];
                              updated[index].isNew = false;
                              updated[index].isEditing = false;
                              setTasks(updated);
                            }}
                            className="bg-green-500 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700"
                          >
                            Save
                          </button>
                        ) : (
                          <div className="flex gap-2 justify-center">
                            <button
                              onClick={() => {
                                const updated = [...tasks];
                                updated[index].isEditing = true;
                                setTasks(updated);
                              }}
                              className="bg-yellow-400 px-3 py-1 rounded-full text-sm"
                            >
                              Edit
                            </button>
                            {/* <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                              Close
                            </button> */}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <button
            onClick={handleAddNewUser}
            className="mt-4 px-6 py-2 bg-[#ffba00] border border-[#ffba00] rounded-full"
          >
            + Add New User
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskTable;
