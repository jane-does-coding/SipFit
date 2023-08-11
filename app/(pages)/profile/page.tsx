import ProfilePage from "@/components/Pages/Profile/Profile";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Profile = () => {
	return (
		<div className="flex">
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="w-full h-screen overflow-scroll">
				<ProfilePage />
			</div>
		</div>
	);
};

export default Profile;
