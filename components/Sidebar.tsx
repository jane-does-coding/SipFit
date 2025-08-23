"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
	LuApple,
	LuChartLine,
	LuCircleFadingPlus,
	LuFeather,
	LuLayoutDashboard,
	LuLogOut,
	LuMail,
	LuMilk,
	LuPin,
	LuUser,
} from "react-icons/lu";

const Sidebar = () => {
	const [pinned, setPinned] = useState(false);
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	const activeIconClasses =
		"bg-indigo-100 border-[1px] border-indigo-400 text-indigo-600";
	const inactiveIconClasses = "bg-slate-100 border-[1px] border-slate-300";

	return (
		<div
			className={`flex flex-col justify-between ${
				pinned ? "w-[19vw]" : "w-[6vw] hover:w-[19vw]"
			} border-r-[1px] border-slate-300 transition-all h-screen overflow-hidden bg-white px-[1vw] py-[3vh] sticky`}
		>
			{/* Pin Button */}
			<button
				onClick={() => setPinned(!pinned)}
				className="absolute top-[1vh] left-[16.5vw] p-2 rounded-full text-slate-400 transition-colors cursor-pointer"
			>
				<LuPin
					className={`text-[2vh] ${
						pinned ? "text-slate-800" : "text-slate-400"
					}`}
				/>
			</button>

			<div className="flex flex-col gap-[2vh] items-start justify-start">
				{/* Logo */}
				<Link
					href={"/"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${activeIconClasses}`}
				>
					<LuMilk className="text-[3.5vh] text-indigo-600" />
					<div className="absolute text-indigo-600 tracking-[1.5px] w-[15vw] text-[3vh] font-extrabold right-[-16.5vw] flex items-center justify-start top-[50%] translate-y-[-50%] steiner">
						SipFit
					</div>
				</Link>

				{/* Dashboard */}
				<Link
					href={"/"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${
						isActive("/") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuLayoutDashboard
						className={`text-[3vh] ${
							isActive("/dashboard") ? "text-indigo-600" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] py-[1vh] transition-all translate-y-[-50%]">
						Dashboard
					</div>
				</Link>

				{/* Analytics */}
				<Link
					href={"/analitics"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${
						isActive("/analitics") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuChartLine
						className={`text-[3vh] ${
							isActive("/analitics") ? "text-indigo-600" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] py-[1vh] transition-all translate-y-[-50%]">
						Analytics
					</div>
				</Link>

				{/* Journal */}
				<Link
					href={"/journal"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${
						isActive("/journal") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuFeather
						className={`text-[3vh] ${
							isActive("/journal") ? "text-indigo-600" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] py-[1vh] transition-all translate-y-[-50%]">
						Journal
					</div>
				</Link>

				{/* Notification */}
				<Link
					href={"/diet"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${
						isActive("/diet") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuApple
						className={`text-[3vh] ${
							isActive("/diet") ? "text-indigo-600" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] py-[1vh] transition-all translate-y-[-50%]">
						Meal Plan
					</div>
				</Link>

				{/* Profile */}
				<Link
					href={"/profile"}
					className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${
						isActive("/profile") ? activeIconClasses : inactiveIconClasses
					}`}
				>
					<LuUser
						className={`text-[3vh] ${
							isActive("/profile") ? "text-indigo-600" : ""
						}`}
					/>
					<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] py-[1vh] transition-all translate-y-[-50%]">
						Profile
					</div>
				</Link>
			</div>

			{/* Logout */}
			<button
				onClick={() => signOut()}
				className={`w-[4vw] flex items-center justify-center relative aspect-[1] rounded-[2vh] ${
					isActive("/logout") ? activeIconClasses : inactiveIconClasses
				}`}
			>
				<LuLogOut
					className={`text-[3vh] ${
						isActive("/logout") ? "text-indigo-600" : ""
					}`}
				/>
				<div className="absolute w-[15vw] text-[2.25vh] right-[-16.5vw] flex items-center justify-start top-[50%] font-medium hover:pl-[0.25vw] py-[1vh] transition-all translate-y-[-50%]">
					Logout
				</div>
			</button>
		</div>
	);
};

export default Sidebar;
