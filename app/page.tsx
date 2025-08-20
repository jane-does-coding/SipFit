import Sidebar from "@/components/Sidebar";
import getCurrentUser from "./actions/getCurrentUser";
import LandingPage from "@/components/Pages/Landing/LandingPage";
import DashboardPage from "@/components/Pages/Dashboard/DashboardPage";

export default async function Home() {
	const currentUser = await getCurrentUser();

	return (
		<div className="flex w-full h-screen">
			{currentUser ? (
				<>
					<div className="min-w-fit">
						<Sidebar />
					</div>
					<div className="w-full h-screen overflow-scroll">
						<DashboardPage currentUser={currentUser} />
					</div>
				</>
			) : (
				<div className="w-full h-screen overflow-scroll">
					<LandingPage />
				</div>
			)}
		</div>
	);
}
