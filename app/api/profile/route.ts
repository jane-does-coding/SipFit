import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const currentUser = await getCurrentUser();
		if (!currentUser) return;
		const userId = currentUser.id;

		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: {
				age: body.age ? Number(body.age) : null,
				gender: body.gender || null,
				weightLbs: body.weightLbs ? Number(body.weightLbs) : null,
				goalWeightLbs: body.goalWeightLbs ? Number(body.goalWeightLbs) : null,
				heightInches: body.heightInches ? Number(body.heightInches) : null,
				goalText: body.goalText || null,
				dietPlan: body.dietPlan || null,
				waistInches: body.waistInches ? Number(body.waistInches) : null,
				chestInches: body.chestInches ? Number(body.chestInches) : null,
				hipsInches: body.hipsInches ? Number(body.hipsInches) : null,
				armInches: body.armInches ? Number(body.armInches) : null,
				thighInches: body.thighInches ? Number(body.thighInches) : null,
			},
		});

		return NextResponse.json(updatedUser);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to update profile" },
			{ status: 500 }
		);
	}
}
