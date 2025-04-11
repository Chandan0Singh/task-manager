"use client";
import { User } from "lucide-react";
import Image from "next/image";
import TaskTable from "@components/TaskTable";
import Logo from "@assets/Logo.jpeg";
import NavigationBar from "@components/NavigationBar";

export default function TaskPage() {
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
            <select className="text-center bg-[#ffba00] rounded-full px-4 py-1 text-lg">
              <option value="All">All</option>
              <option value="Hr">Hr</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>
        </div>
      </div>
      {/* Task Table */}
      <div className="w-full overflow-hidden">
        <TaskTable />
      </div>
    </div>
  );
}
