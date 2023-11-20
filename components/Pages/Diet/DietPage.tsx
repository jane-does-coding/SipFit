"use client";
import React, { useState } from "react";
import { User } from "@prisma/client";
import { calculateDietPlan } from "@/app/utils/dietCalculator";

const DietPage = ({ currentUser }: { currentUser: User }) => {
	const [confirmed, setConfirmed] = useState(false);

	const dietPlan = calculateDietPlan(currentUser);

	const saveMealPlan = async () => {
		if (!dietPlan) return;
		await fetch("/api/mealplan", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...dietPlan, userId: currentUser.id }),
		});
		setConfirmed(true);
	};

	if (!dietPlan) {
		return (
			<div className="p-8">
				<h1 className="text-[4vh] steiner font-semibold tracking-[2px] mb-6">
					Diet Plan
				</h1>
				<div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl">
					Please complete your profile (age, weight, height, gender) to view
					your personalized diet plan.
				</div>
			</div>
		);
	}

	const Card = ({
		title,
		content,
	}: {
		title: string;
		content: React.ReactNode;
	}) => (
		<div className="py-[2.5vh] px-[2vw] bg-white rounded-[3vh] border-[1px] border-slate-300">
			<h3 className="text-[2.5vh] mb-2 steiner font-extrabold tracking-[2px]">
				{title}
			</h3>
			<div className="text-[1.8vh] text-gray-700">{content}</div>
		</div>
	);

	const exampleMeal = {
		title: "Grilled Chicken Bowl",
		description: `
A balanced lunch option that hits your macros:
- 6 oz grilled chicken breast (lean protein)
- 1 cup quinoa (complex carbs + fiber)
- 1 cup steamed broccoli (micronutrients + fiber)
- 1 tbsp olive oil drizzle (healthy fats)

💡 Why it's good:
- Protein supports muscle repair.
- Quinoa provides slow-release energy.
- Veggies add fiber, vitamins, and minerals.
- Healthy fats improve satiety and nutrient absorption.
		`,
	};

	return (
		<div className="p-8">
			<h1 className="text-[4vh] steiner font-semibold tracking-[2px] mb-6">
				Your Suggested Diet Plan
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card
					title="Daily Calories"
					content={<p>{dietPlan.calories} kcal/day</p>}
				/>

				<Card
					title="Macronutrients"
					content={
						<div className="space-y-1">
							<p>Protein: {dietPlan.proteinGrams} g</p>
							<p>Carbs: {dietPlan.carbsGrams} g</p>
							<p>Fats: {dietPlan.fatsGrams} g</p>
						</div>
					}
				/>

				<Card
					title="Healthy Eating Guidelines"
					content={
						<div className="whitespace-pre-line leading-relaxed">
							{dietPlan.planText}
						</div>
					}
				/>

				<Card
					title="Example Meal"
					content={
						<div className="whitespace-pre-line leading-relaxed">
							<h4 className="font-semibold mb-2">{exampleMeal.title}</h4>
							{exampleMeal.description}
						</div>
					}
				/>
			</div>

			<div className="mt-6 flex justify-center">
				{!confirmed ? (
					<button
						onClick={saveMealPlan}
						className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-600 transition"
					>
						Confirm & Save Plan
					</button>
				) : (
					<p className="text-indigo-600 font-semibold text-lg">
						Plan saved successfully!
					</p>
				)}
			</div>
		</div>
	);
};

export default DietPage;
