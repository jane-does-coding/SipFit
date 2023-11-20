import { User } from "@prisma/client";

export function calculateDietPlan(user: User) {
	console.log(user);
	if (!user.age || !user.gender || !user.weightLbs || !user.heightInches) {
		return null;
	}

	const weightKg = user.weightLbs * 0.453592;
	const heightCm = user.heightInches * 2.54;

	const bmr =
		user.gender.toLowerCase() === "male"
			? 10 * weightKg + 6.25 * heightCm - 5 * user.age + 5
			: 10 * weightKg + 6.25 * heightCm - 5 * user.age - 161;

	const calories = Math.round(bmr * 1.2);

	const proteinGrams = Math.round((calories * 0.3) / 4);
	const carbsGrams = Math.round((calories * 0.4) / 4);
	const fatsGrams = Math.round((calories * 0.3) / 9);

	return {
		calories,
		proteinGrams,
		carbsGrams,
		fatsGrams,
		planText: `
💡 Healthy Eating Guidelines
- Eat 3 main meals + 1–2 snacks daily.
- Breakfast: high-protein (eggs, oats, Greek yogurt, fruit).
- Lunch: lean protein + complex carbs + veggies.
- Dinner: lighter meal, prioritize vegetables and protein.
- Snacks: nuts, seeds, fruits, hummus with veggies.
- Avoid: soda, fried foods, ultra-processed snacks, excess sugar.
- Hydration: 2–3L water daily.
    `,
	};
}
