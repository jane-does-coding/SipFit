import RegisterModal from "@/components/Modals/RegisterModal";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<RegisterModal />
			<Sidebar />
		</div>
	);
}
