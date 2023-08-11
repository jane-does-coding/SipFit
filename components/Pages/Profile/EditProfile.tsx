"use client";

import Input from "@/components/Inputs/Input";
import React, { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const EditProfile = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			age: "",
			weightLbs: "",
			goalWeightLbs: "",
			heightInches: "",
			bmi: "",
			goalText: "",
			dietPlan: "",
			caloriesPerDay: "",
			proteinGrams: "",
			fatGrams: "",
			carbGrams: "",
			waistInches: "",
			chestInches: "",
			hipsInches: "",
			armInches: "",
			thighInches: "",
		},
	});

	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		console.log("Submitted data:", data);
		try {
			setLoading(true);
			setMessage(null);

			const res = await fetch("/api/profile", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!res.ok) throw new Error("Failed to update profile");

			const result = await res.json();
			setMessage("Profile updated successfully!");
			console.log("Updated User:", result);
		} catch (error) {
			console.error(error);
			setMessage("Something went wrong while saving profile.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center p-8">
			<h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl"
			>
				<Input
					id="age"
					label="Age"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="weightLbs"
					label="Weight (lbs)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="goalWeightLbs"
					label="Goal Weight (lbs)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="heightInches"
					label="Height (inches)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="bmi"
					label="BMI"
					type="number"
					register={register}
					errors={errors}
				/>

				<Input
					id="goalText"
					label="Goal Description"
					type="text"
					register={register}
					errors={errors}
				/>
				<Input
					id="dietPlan"
					label="Diet Plan"
					type="text"
					register={register}
					errors={errors}
				/>

				<Input
					id="caloriesPerDay"
					label="Calories per Day"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="proteinGrams"
					label="Protein (g)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="fatGrams"
					label="Fat (g)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="carbGrams"
					label="Carbs (g)"
					type="number"
					register={register}
					errors={errors}
				/>

				<Input
					id="waistInches"
					label="Waist (inches)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="chestInches"
					label="Chest (inches)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="hipsInches"
					label="Hips (inches)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="armInches"
					label="Arm (inches)"
					type="number"
					register={register}
					errors={errors}
				/>
				<Input
					id="thighInches"
					label="Thigh (inches)"
					type="number"
					register={register}
					errors={errors}
				/>

				<button
					type="submit"
					className="col-span-1 md:col-span-2 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
				>
					Save Profile
				</button>
			</form>
		</div>
	);
};

export default EditProfile;
