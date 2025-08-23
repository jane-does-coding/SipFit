import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { userId, title, note } = body;

		if (!userId || !title || !note) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		const progressNote = await prisma.progressNote.create({
			data: {
				userId,
				title,
				note,
				date: new Date(),
			},
		});

		return NextResponse.json(progressNote, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to create progress note" },
			{ status: 500 }
		);
	}
}

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get("userId");

	if (!userId) {
		return NextResponse.json({ error: "Missing userId" }, { status: 400 });
	}

	const notes = await prisma.progressNote.findMany({
		where: { userId },
		orderBy: { date: "desc" },
	});

	return NextResponse.json(notes);
}
