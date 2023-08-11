import React from "react";
import { User } from "@prisma/client";

const UserInfo = ({ currentUser }: { currentUser: User }) => {
	return (
		<div className="p-6 rounded-2xl">
			<h1 className="text-[3.5vh] steiner tracking-[2px] font-semibold mb-6 text-center">
				Profile Information
			</h1>
			<div className="grid grid-cols-2 gap-6">
				{/* Profile Section */}
				<div className="space-y-2">
					<h3 className="text-[2vh] font-semibold text-gray-700 border-b pb-1">
						Profile
					</h3>
					<p className="text-[1.8vh]">
						<span className="font-medium">Name:</span> {currentUser.name}
					</p>
					<p className="text-[1.8vh]">
						<span className="font-medium">Username:</span> {currentUser.id}
					</p>
				</div>

				{/* Contact Section */}
				<div className="space-y-2">
					<h3 className="text-[2vh] font-semibold text-gray-700 border-b pb-1">
						Contact
					</h3>
					<p className="text-[1.8vh]">
						<span className="font-medium">Email:</span> {currentUser.email}
					</p>
				</div>

				{/* Account Section */}
				<div className="space-y-2">
					<h3 className="text-[2vh] font-semibold text-gray-700 border-b pb-1">
						Account
					</h3>
					<p className="text-[1.8vh]">
						<span className="font-medium">Created At:</span>{" "}
						{new Date(currentUser.createdAt).toLocaleDateString()}
					</p>
					<p className="text-[1.8vh]">
						<span className="font-medium">Updated At:</span>{" "}
						{new Date(currentUser.updatedAt).toLocaleDateString()}
					</p>
				</div>

				{/* Extra Info */}
				<div className="space-y-2">
					<h3 className="text-[2vh] font-semibold text-gray-700 border-b pb-1">
						Other
					</h3>
					<p className="text-[1.8vh]">
						<span className="font-medium">ID:</span> {currentUser.id}
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserInfo;
