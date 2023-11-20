import getCurrentUser from "@/app/actions/getCurrentUser";
import DietPage from "@/components/Pages/Diet/DietPage";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Diet = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) return <div className="">Not authorized</div>;
	return (
		<div className="flex">
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="w-full h-screen overflow-scroll">
				<DietPage currentUser={currentUser} />
			</div>
		</div>
	);
};

export default Diet;
