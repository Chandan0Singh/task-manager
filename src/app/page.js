import TaskTable from "@/components/TaskTable"
import {User} from "lucide-react"
import Image from "next/image";
import images2 from "@/assets/images2.png"


export default function Home() {
	return (
		<div className="  m-auto min-h-screen py-12" >
			<div className="max-w-screen-xl mx-auto pr-8">

				{/* upper div  */}
				<div className="flex justify-between items-center ">
					<div className="flex items-center mb-1">
						<div className="h-8 w-28 "></div>
						<p className="text-xl font-semibold">Task Management System</p>
					</div>

					<div className="flex items-center mb-3">
						<div className="bg-yellow-500 rounded-full h-10 w-10 flex justify-center mr-2 items-center"><User strokeWidth={2} color="#ffffff"/></div>
						<p className="px-1">Hi, suraj poswal (admin)</p>
					</div>
				</div>

				{/* second div --bar  */}
				<div className="flex items-center mb-4">
					<div className="font-bold text-lg">
						<Image src={images2} alt="Logo" width={50} height={50} /> 
					</div>
					{/* Navigation bar */}
					<div className="flex justify-between bg-yellow-500 flex-grow ml-2 rounded-full shadow-lg">
						<div className="flex ">
							<div className=" px-5 py-3   cursor-pointer">
							</div>
							<div className=" px-4 py-3 font-semibold  hover:bg-gray-700 hover:text-white cursor-pointer hover:transition duration-150">
								AMD Task
							</div>
							<div className=" px-4 py-3 font-semibold  hover:bg-gray-700 hover:text-white  cursor-pointer hover:transition duration-150">
								Manage Department
							</div>
							<div className=" px-4 py-3 font-semibold  hover:bg-gray-700 hover:text-white  cursor-pointer ">
								User Management
							</div>
						</div>
						<div className=" px-8 py-3  font-semibold  text-white">
							Total Active Tasks: <span className=" font-bold text-black">7</span>
						</div>
					</div>
				</div>


				{/* third div  */}
				<div className="flex justify-between">
					<div className="flex">
						<div className="h-8 w-28 "></div>
						<p>Review and organize tasks that could receive feedback from the support team.</p>
					</div>
					<div className="flex flex-col mr-2 mt-4 w-[12rem] ">
						<label className="mb-2 mx-auto">Select Departments</label>
						<select className="text-center bg-yellow-500  rounded-full px-4 py-1 text-lg ">
							<option value="All">All</option>
							<option value="Hr">Hr</option>
							<option value="Admin">Admin</option>
							<option value="Manager">Manager</option>
							<option value="Recruiter">Recruiter</option>
						</select>
					</div>
				</div>

			</div>

				<div>
					<TaskTable />
				</div>

		</div>
	)
}