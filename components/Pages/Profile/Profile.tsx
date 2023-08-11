import React from "react";
import EditProfile from "./EditProfile";
import { User } from "@prisma/client";
import UserInfo from "./UserInfo";

const ProfilePage = ({ currentUser }: { currentUser: User }) => {
	return (
		<div className="py-[3vh] px-[2vw]">
			<h1 className="text-[4vh] steiner font-semibold tracking-[2px]">
				Profile Page
			</h1>
			<UserInfo currentUser={currentUser} />
			<EditProfile currentUser={currentUser} />
		</div>
	);
};

export default ProfilePage;
