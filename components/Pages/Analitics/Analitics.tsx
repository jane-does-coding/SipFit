"use client";
import React from "react";
import { User } from "@prisma/client";
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	PieChart,
	Pie,
	Cell,
	BarChart,
	Bar,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const Card = ({ children }: { children: React.ReactNode }) => (
	<div className="border-[1px] border-slate-300 rounded-2xl bg-white">
		{children}
	</div>
);
const CardContent = ({ children }: { children: React.ReactNode }) => (
	<div className="p-6">{children}</div>
);

const AnaliticsPage = ({ currentUser }: { currentUser: User }) => {
	const bmi =
		currentUser.heightInches && currentUser.weightLbs
			? (703 * currentUser.weightLbs) / currentUser.heightInches ** 2
			: null;

	const weight = currentUser.weightLbs || null;
	const height = currentUser.heightInches || null;

	const bmiData = bmi
		? [
				{ name: "You", value: bmi },
				{ name: "USA Avg", value: 29 },
				{ name: "World Avg", value: 24 },
		  ]
		: null;

	const weightData = weight
		? [
				{ name: "You", value: weight },
				{ name: "USA Avg", value: 170 },
				{ name: "World Avg", value: 137 },
		  ]
		: null;

	const heightData = height
		? [
				{ name: "You", value: height },
				{ name: "USA Avg", value: 66 },
				{ name: "World Avg", value: 64 },
		  ]
		: null;

	const bodyData =
		currentUser.waistInches ||
		currentUser.chestInches ||
		currentUser.hipsInches ||
		currentUser.armInches ||
		currentUser.thighInches
			? [
					{
						metric: "Waist",
						you: currentUser.waistInches || 0,
						usa: 38,
						world: 35,
					},
					{
						metric: "Chest",
						you: currentUser.chestInches || 0,
						usa: 40,
						world: 38,
					},
					{
						metric: "Hips",
						you: currentUser.hipsInches || 0,
						usa: 42,
						world: 40,
					},
					{
						metric: "Arm",
						you: currentUser.armInches || 0,
						usa: 13,
						world: 12,
					},
					{
						metric: "Thigh",
						you: currentUser.thighInches || 0,
						usa: 22,
						world: 21,
					},
			  ]
			: null;

	const activityData = [
		{ day: "Mon", steps: 5000, calories: 2200 },
		{ day: "Tue", steps: 6500, calories: 2100 },
		{ day: "Wed", steps: 8000, calories: 2300 },
		{ day: "Thu", steps: 7200, calories: 2000 },
		{ day: "Fri", steps: 9000, calories: 2500 },
		{ day: "Sat", steps: 10000, calories: 2700 },
		{ day: "Sun", steps: 4000, calories: 1800 },
	];

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
			{/* BMI Pie */}
			{bmiData && (
				<Card>
					<CardContent>
						<h2 className="text-xl font-semibold mb-4">BMI Comparison</h2>
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={bmiData}
									dataKey="value"
									nameKey="name"
									cx="50%"
									cy="50%"
									outerRadius={100}
									label
								>
									{bmiData.map((_, index) => (
										<Cell key={index} fill={COLORS[index % COLORS.length]} />
									))}
								</Pie>
								<Tooltip />
							</PieChart>
						</ResponsiveContainer>
					</CardContent>
				</Card>
			)}

			{/* Weight Bar */}
			{weightData && (
				<Card>
					<CardContent>
						<h2 className="text-xl font-semibold mb-4">Weight Comparison</h2>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={weightData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="value" fill="#8884d8" />
							</BarChart>
						</ResponsiveContainer>
					</CardContent>
				</Card>
			)}

			{/* Height Bar */}
			{heightData && (
				<Card>
					<CardContent>
						<h2 className="text-xl font-semibold mb-4">Height Comparison</h2>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={heightData}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="value" fill="#82ca9d" />
							</BarChart>
						</ResponsiveContainer>
					</CardContent>
				</Card>
			)}

			{/* Body Measurements Radar */}
			{bodyData && (
				<Card>
					<CardContent>
						<h2 className="text-xl font-semibold mb-4">
							Body Measurements Comparison
						</h2>
						<ResponsiveContainer width="100%" height={300}>
							<RadarChart outerRadius={120} data={bodyData}>
								<PolarGrid />
								<PolarAngleAxis dataKey="metric" />
								<PolarRadiusAxis />
								<Radar
									name="You"
									dataKey="you"
									stroke="#8884d8"
									fill="#8884d8"
									fillOpacity={0.6}
								/>
								<Radar
									name="USA Avg"
									dataKey="usa"
									stroke="#82ca9d"
									fill="#82ca9d"
									fillOpacity={0.6}
								/>
								<Radar
									name="World Avg"
									dataKey="world"
									stroke="#ffc658"
									fill="#ffc658"
									fillOpacity={0.6}
								/>
								<Legend />
							</RadarChart>
						</ResponsiveContainer>
					</CardContent>
				</Card>
			)}
		</div>
	);
};

export default AnaliticsPage;
