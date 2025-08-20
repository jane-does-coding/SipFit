"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const slides = [
	{
		image: "/img1.png",
		title: "Main Dashboard",
		description: "Goals — XP — Stats",
	},
	{
		image: "/img2.png",
		title: "Quest Log",
		description: "Daily — Weekly — Challenges",
	},
	{
		image: "/img3.png",
		title: "Skill Tracker",
		description: "Level Up — Progress — Growth",
	},
	{
		image: "/img4.png",
		title: "Rewards Shop",
		description: "Earn — Spend — Celebrate",
	},
];

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { ref: bottomRef, inView: bottomInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="mb-[10vh]">
			<div className="w-[90vw] mx-auto flex justify-between items-end mb-[3vh]">
				<motion.h2
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
					className="text-[12vh] steiner tracking-[2px]"
				>
					See It in Action
				</motion.h2>
				<motion.p
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					className="w-[20vw] text-[2vh] pb-[1vh]"
				>
					Browse dashboards, profile, analytics and more! Explore all the
					features of SipFit that will make you healthier
				</motion.p>
			</div>

			<div className="w-full max-w-[100vw] h-[80vh] mx-auto overflow-hidden relative">
				{/* Slides */}
				<div
					className={`flex gap-[1.5vw] pl-[15vw] transition-transform duration-[1100ms] ease-in-out`}
					style={{
						width: `${slides.length * 100}vw`, // dynamic width
						transform: `translateX(-${currentSlide * 71.5}vw)`,
					}}
				>
					{slides.map((slide, index) => (
						<div
							key={index}
							className="w-[70vw] h-[70vh] flex items-center justify-center rounded-[0.5rem] relative"
						>
							<img
								src={slide.image}
								className="w-[70vw] h-[70vh] object-cover border-slate-400 border-[1px] rounded-[2vh]"
								alt={slide.title}
							/>
							{/* Tags */}
							{/* <div className="absolute top-[2vh] left-1/2 -translate-x-1/2 text-[2vh] rounded-full flex items-center justify-center gap-[1vw]">
								{slide.description.split(" — ").map((tag, i) => (
									<span
										key={i}
										className="px-[1.5vw] py-[0.25vh] font-semibold text-[1.5vh] bg-white rounded-full"
									>
										{tag}
									</span>
								))}
							</div> */}
							<div className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 bg-neutral-50 font-semibold text-[2vh] rounded-full px-[3vw] py-[1vh]">
								{slide.title}
							</div>
						</div>
					))}
				</div>

				{/* Dots */}
				<div className="flex w-fit mx-auto gap-[0.5vw] mt-[5vh]">
					{slides.map((_, i) => (
						<div
							key={i}
							className={`w-[7px] h-[7px] rounded-full ${
								currentSlide === i ? "bg-black" : "bg-neutral-300"
							}`}
						></div>
					))}
				</div>
			</div>

			<motion.div
				ref={bottomRef}
				initial={{ opacity: 0, y: 10 }}
				animate={bottomInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
				className="flex w-[90vw] mx-auto mt-[3vh]"
			>
				<div className="w-1/3 flex items-center justify-start">
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className=" text-[4vh]">+</p>
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className=" text-[4vh]">+</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Carousel;
