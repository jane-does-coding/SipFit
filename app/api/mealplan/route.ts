import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
	const body = await req.json();
	const { userId, calories, proteinGrams, carbsGrams, fatsGrams, planText } =
		body;

	const mealPlan = await prisma.mealPlan.create({
		data: {
			userId,
			calories,
			proteinGrams,
			carbsGrams,
			fatsGrams,
			planText,
			confirmed: true,
		},
	});

	return NextResponse.json(mealPlan);
}
