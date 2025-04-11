"use client";
import { User } from "lucide-react";
import Image from "next/image";
import DepartmentTable from "@components/Departmentable";
import Logo from "@assets/Logo.jpeg";
import NavigationBar from "@components/NavigationBar";
import { useState } from "react";

export default function TaskPage() {
    const [isshowoption, setIsshowoption] = useState(false)
    const [slectedOption, setSetSelectedOption] = useState("All")
  return (
    <div className="min-h-screen py-6 w-full bg-white overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Upper Div */}
        <div className="flex justify-between items-center w-6xl">
          <div className="flex items-center mb-1">
            <div className="h-8 w-28"></div>
            <p className="text-xl font-semibold">Task Management System</p>
          </div>

          <div className="flex items-center mb-3">
            <div className="bg-[#ffba00] rounded-full h-10 w-10 flex justify-center mr-2 items-center">
              <User strokeWidth={2} color="#ffffff" />
            </div>
            <p className="px-1">Hi, Suraj Poswal (admin)</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="mb-1 w-6xl">
          <NavigationBar />
        </div>

        {/* Third Div */}
        <div className="flex justify-between mb-8 w-6xl">
          <div className="flex">
            <div className="h-8 w-28"></div>
            <p>
              Review and organize tasks that could receive feedback from the
              support team.
            </p>
          </div>
          <div className="flex flex-col w-[12rem]">
            <label className="mb-2 text-center">Select Departments</label>
            <div onClick={()=>setIsshowoption(!isshowoption)} className="text-center bg-[#ffba00] rounded-full px-4 py-1 text-lg mb-1 relative">
            {slectedOption}
            </div>
            {isshowoption && 
              <div className="text-center bg-[#616262] text-white rounded-[20px]  px-4py-1 py-2 text-lg block px-[1.5rem] relative z-9">
              <div onClick={()=>setSelectedOption("All")} value="All" className="">All</div>
                <div onClick={()=>setSetSelectedOption("Developing")} value="Developing" className="cursor-pointer py-1 text-sm  w-full hover:bg-[#ffba00] hover:rounded-full">Developing</div>
                <div onClick={()=>setSetSelectedOption("Sales")}  value="Sales" className="cursor-pointer py-1 text-sm  w-full hover:bg-[#ffba00] hover:rounded-full">Manager</div>
                <div onClick={()=> setSetSelectedOption("Animation")}  value="Animation" className="cursor-pointer py-1 text-sm  w-full hover:bg-[#ffba00] hover:rounded-full">Animation</div>
                <div onClick={()=>setSetSelectedOption("Dig. Makreting")} value="Dig. Makreting" className="cursor-pointer py-1 text-sm  w-full hover:bg-[#ffba00] hover:rounded-full whitespace-nowrap ">Dig. Makreting</div>
              </div>
            }
            
          </div>
        </div>
      </div>
      {/* Task Table */}
      <div className="w-full overflow-hidden h-[66vh]">
        <DepartmentTable />
        
      </div>
    </div>
  );
}
