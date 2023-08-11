import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import getCurrentUser from "./actions/getCurrentUser";
import LandingPage from "@/components/Pages/Landing/LandingPage";
import DashboardPage from "@/components/Pages/Dashboard/DashboardPage";

export default async function Home() {
	const currentUser = await getCurrentUser();
	if (!currentUser) return <div className="">Not authorized</div>;
	return (
		<div className="flex">
			<div className="min-w-fit">
				<Sidebar />
			</div>
			<div className="w-full h-screen overflow-scroll">
				{currentUser ? (
					<DashboardPage currentUser={currentUser} />
				) : (
					<LandingPage />
				)}
			</div>
		</div>
	);
}
