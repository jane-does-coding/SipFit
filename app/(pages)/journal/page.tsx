import getCurrentUser from "@/app/actions/getCurrentUser";
import JournalPage from "@/components/Pages/Journal/JournalPage";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Journal = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) return <div className="">Not authorized</div>;
	return (
		<div className="flex">
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="w-full h-screen overflow-scroll">
				<JournalPage currentUser={currentUser} />
			</div>
		</div>
	);
};

export default Journal;
