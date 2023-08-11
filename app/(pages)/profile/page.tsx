import getCurrentUser from "@/app/actions/getCurrentUser";
import ProfilePage from "@/components/Pages/Profile/Profile";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Profile = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) return <div className="">Not authorized</div>;
	return (
		<div className="flex">
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="w-full h-screen overflow-scroll">
				<ProfilePage currentUser={currentUser} />
			</div>
		</div>
	);
};

export default Profile;
