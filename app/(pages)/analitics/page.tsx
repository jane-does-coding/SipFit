import getCurrentUser from "@/app/actions/getCurrentUser";
import AnaliticsPage from "@/components/Pages/Analitics/Analitics";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Analitics = async () => {
	const currentUser = await getCurrentUser();
	if (!currentUser) return <div className="">Not authorized</div>;
	return (
		<div className="flex">
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="w-full h-screen overflow-scroll">
				<AnaliticsPage currentUser={currentUser} />
			</div>
		</div>
	);
};

export default Analitics;
