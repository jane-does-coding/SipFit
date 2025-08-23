"use client";

import { useEffect, useState } from "react";
import { User, ProgressNote } from "@prisma/client";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "@/components/Inputs/Input";

const JournalPage = ({ currentUser }: { currentUser: User }) => {
	const [notes, setNotes] = useState<ProgressNote[]>([]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			title: "",
			note: "",
		},
	});

	useEffect(() => {
		const fetchNotes = async () => {
			const res = await fetch(`/api/progress-notes?userId=${currentUser.id}`);
			if (res.ok) {
				const data = await res.json();
				setNotes(data);
			}
		};
		fetchNotes();
	}, [currentUser.id]);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const res = await fetch("/api/progress-notes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				userId: currentUser.id,
				title: data.title,
				note: data.note,
			}),
		});

		if (res.ok) {
			const newNote = await res.json();
			setNotes((prev) => [newNote, ...prev]);
			reset();
		}
	};

	return (
		<div className="max-w-[90%] mx-auto p-6">
			<h1 className="text-[4vh] mb-[3vh] steiner font-semibold tracking-[2px]">
				Journal
			</h1>
			{/* New note form */}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6 ">
				<div className="relative">
					<Input
						id="title"
						label="Title"
						register={register}
						errors={errors}
						required
					/>
				</div>

				<div className="relative">
					<textarea
						id="note"
						{...register("note", { required: true })}
						placeholder=" "
						className={`peer w-full p-3 pt-6 pl-4 font-light bg-neutral-100/75 text-black border-2 rounded-[2vh] outline-none transition
              ${errors["note"] ? "border-rose-400" : "border-neutral-300"}
              ${
								errors["note"]
									? "focus:border-rose-500"
									: "focus:border-neutral-400"
							}
              h-28 resize-none`}
					/>
					<label
						htmlFor="note"
						className={`absolute text-md duration-150 transform -translate-y-3 top-5 left-4 z-10 origin-[0]
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
              ${
								errors["note"]
									? "text-rose-300 font-semibold"
									: "text-slate-500/70"
							}
            `}
					>
						Note
					</label>
				</div>

				<button
					type="submit"
					className="px-4 w-full py-[1.25vh] bg-indigo-600 cursor-pointer text-white rounded-[2vh] hover:bg-indigo-700"
				>
					Save Note
				</button>
			</form>

			{/* Notes list */}
			<div className="flex mt-[7vh]">
				<div className="flex flex-col gap-[2vh] w-7/10">
					<h1 className="text-[4vh] mb-[1vh] steiner font-semibold tracking-[2px]">
						Progress Logs
					</h1>
					{notes.map((n) => (
						<div
							key={n.id}
							className="border-[1px] border-slate-300 rounded-[3vh] p-4 bg-white"
						>
							<h2 className="font-semibold text-[2.25vh] steiner tracking-[2px]">
								{n.title}
							</h2>
							<p className="text-[1.5vh] text-slate-500 mt-1">
								{new Date(n.date).toLocaleDateString()}
							</p>
							<p className="text-gray-700 text-[2vh]">{n.note}</p>
						</div>
					))}
				</div>
				<div className="w-3/10 pl-[2vw]">
					<h1 className="text-[4vh] mb-[1vh] steiner font-semibold tracking-[2px]">
						Do it.
					</h1>
					<p className="text-[2.25vh] leading-[3.5vh]">
						Logging your diet and workout progress helps you stay accountable
						and on track with improvements over time, making it easier to see
						how your efforts pay off. It also highlights patterns, like what
						foods or routines work best for you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default JournalPage;
