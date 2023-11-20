"use client";

import { User } from "@prisma/client";

const DashboardPage = ({ currentUser }: { currentUser: User }) => {
	const calcBMI = () => {
		if (!currentUser.heightInches || !currentUser.weightLbs) return null;
		return (
			(703 * currentUser.weightLbs) /
			(currentUser.heightInches * currentUser.heightInches)
		);
	};

	const healthyRange = () => {
		if (!currentUser.heightInches) return null;
		const min = (18.5 * currentUser.heightInches ** 2) / 703;
		const max = (24.9 * currentUser.heightInches ** 2) / 703;
		return { min, max };
	};

	const calcBMR = () => {
		if (
			!currentUser.heightInches ||
			!currentUser.weightLbs ||
			!currentUser.age ||
			!currentUser.gender
		)
			return null;

		const weightKg = currentUser.weightLbs * 0.453592;
		const heightCm = currentUser.heightInches * 2.54;

		let bmr = 10 * weightKg + 6.25 * heightCm - 5 * currentUser.age;
		bmr += currentUser.gender.toLowerCase() === "male" ? 5 : -161;

		return bmr;
	};

	const calcTDEE = (bmr: number) => {
		return {
			sedentary: bmr * 1.2,
			light: bmr * 1.375,
			moderate: bmr * 1.55,
			active: bmr * 1.725,
			veryActive: bmr * 1.9,
		};
	};

	const calcMacros = (calories: number) => {
		if (!calories) return null;
		const protein = (0.25 * calories) / 4;
		const fats = (0.25 * calories) / 9;
		const carbs = (0.5 * calories) / 4;
		return { protein, fats, carbs };
	};

	const calcGoalProgress = () => {
		if (!currentUser.weightLbs || !currentUser.goalWeightLbs) return null;
		const diff = currentUser.goalWeightLbs - currentUser.weightLbs;
		return { diff };
	};

	const bmi = calcBMI();
	const range = healthyRange();
	const bmr = calcBMR();
	const tdee = bmr ? calcTDEE(bmr) : null;
	const maintainCalories = tdee?.moderate;
	const loseCalories = maintainCalories ? maintainCalories - 500 : null;
	const gainCalories = maintainCalories ? maintainCalories + 500 : null;

	const macrosMaintain = maintainCalories ? calcMacros(maintainCalories) : null;
	const macrosLose = loseCalories ? calcMacros(loseCalories) : null;
	const macrosGain = gainCalories ? calcMacros(gainCalories) : null;

	const goalProgress = calcGoalProgress();

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

	const BMIGraph = ({ bmi }: { bmi: number }) => {
		const min = 10;
		const max = 40;
		const position = ((bmi - min) / (max - min)) * 100;

		return (
			<div className="mt-3">
				<div className="flex w-full h-4 rounded overflow-hidden mt-[3.5vh]">
					<div className="bg-blue-400 w-[18.5%]" /> {/* underweight */}
					<div className="bg-green-500 w-[6.4%]" /> {/* normal 18.5–24.9 */}
					<div className="bg-yellow-400 w-[5.5%]" /> {/* overweight 25–29.9 */}
					<div className="bg-red-400 flex-1" /> {/* obese */}
				</div>
				<div
					className="relative w-full"
					style={{ marginTop: "-1rem", height: "1rem" }}
				>
					<div
						className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] rotate-180 top-[-2.5vh] border-transparent border-b-black"
						style={{ left: `${position}%` }}
					/>
				</div>
			</div>
		);
	};

	return (
		<div className="p-8">
			<h1 className="text-[4vh] mb-[3vh] steiner font-semibold tracking-[2px]">
				Dashboard
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* BMI */}
				<Card
					title="BMI"
					content={
						bmi ? (
							<div>
								<p>{bmi.toFixed(1)} (Normal is 18.5–24.9)</p>
								<BMIGraph bmi={bmi} />
							</div>
						) : (
							"Edit your profile to view your BMI."
						)
					}
				/>

				{/* Healthy weight range */}
				<Card
					title="Healthy Weight Range"
					content={
						range
							? `${range.min.toFixed(1)} – ${range.max.toFixed(1)} lbs`
							: "Edit your profile to view your healthy weight range."
					}
				/>

				{/* BMR */}
				<Card
					title="Basal Metabolic Rate (BMR)"
					content={
						bmr
							? `${Math.round(bmr)} kcal/day at rest`
							: "Edit your profile to view your BMR."
					}
				/>

				{/* TDEE */}
				<Card
					title="Calories by Activity"
					content={
						tdee ? (
							<div className="space-y-1">
								<p>Sedentary: {Math.round(tdee.sedentary)} kcal</p>
								<p>Light: {Math.round(tdee.light)} kcal</p>
								<p>Moderate: {Math.round(tdee.moderate)} kcal</p>
								<p>Active: {Math.round(tdee.active)} kcal</p>
								<p>Very Active: {Math.round(tdee.veryActive)} kcal</p>
							</div>
						) : (
							"Edit your profile to view TDEE."
						)
					}
				/>

				{/* Maintain / Lose / Gain */}
				<Card
					title="Calories to Maintain/Lose/Gain"
					content={
						maintainCalories ? (
							<div className="space-y-1">
								<p>Maintain: {Math.round(maintainCalories)} kcal</p>
								<p>Lose ~1lb/week: {Math.round(loseCalories!)} kcal</p>
								<p>Gain ~1lb/week: {Math.round(gainCalories!)} kcal</p>
							</div>
						) : (
							"Edit your profile to view calorie recommendations."
						)
					}
				/>

				{/* Macros */}
				<Card
					title="Macro Breakdown"
					content={
						maintainCalories ? (
							<div className="space-y-2">
								<h4 className="font-semibold">Maintain:</h4>
								<p>
									Protein {Math.round(macrosMaintain!.protein)}g | Fats{" "}
									{Math.round(macrosMaintain!.fats)}g | Carbs{" "}
									{Math.round(macrosMaintain!.carbs)}g
								</p>

								<h4 className="font-semibold">Lose:</h4>
								<p>
									Protein {Math.round(macrosLose!.protein)}g | Fats{" "}
									{Math.round(macrosLose!.fats)}g | Carbs{" "}
									{Math.round(macrosLose!.carbs)}g
								</p>

								<h4 className="font-semibold">Gain:</h4>
								<p>
									Protein {Math.round(macrosGain!.protein)}g | Fats{" "}
									{Math.round(macrosGain!.fats)}g | Carbs{" "}
									{Math.round(macrosGain!.carbs)}g
								</p>
							</div>
						) : (
							"Edit your profile to view macros."
						)
					}
				/>

				{/* Goal progress */}
				<Card
					title="Goal Progress"
					content={
						goalProgress ? (
							<p>
								You need to{" "}
								{goalProgress.diff > 0
									? `gain ${Math.abs(goalProgress.diff)} lbs`
									: `lose ${Math.abs(goalProgress.diff)} lbs`}{" "}
								to hit your goal.
							</p>
						) : (
							"Edit your profile to view your goal progress."
						)
					}
				/>
			</div>
		</div>
	);
};

export default DashboardPage;
