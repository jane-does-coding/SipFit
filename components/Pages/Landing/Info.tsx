"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLogoInstagram } from "react-icons/io5";
import { LuLinkedin } from "react-icons/lu";
import { AiOutlineTikTok } from "react-icons/ai";

const Info = () => {
	const { ref: firstRef, inView: firstInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: secondRef, inView: secondInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: thirdRef, inView: thirdInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { ref: bottomRef, inView: bottomInView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	return (
		<div className="mb-[10vh]">
			{/* Grid */}
			<div className="w-[90vw] mx-auto flex flex-col md:flex-row h-[70vh]">
				{/* First Block */}
				<motion.div
					ref={firstRef}
					initial={{ opacity: 0, y: 20 }}
					animate={firstInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full md:w-1/3 flex flex-col items-center justify-center p-[1.25rem] border-r-[2px] border-b-[2px] border-neutral-200"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={firstInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
						className="mb-[3vh] px-[1vw]"
					>
						<h2 className="text-[4.5vh] pb-[1vh]">Why Pixelate?</h2>
						<p className="text-[1.5vh] font-medium uppercase">
							Make life fun, build discipline, and stay consistent. Progress
							feels better when it{"'"}s rewarding.
						</p>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, y: 20 }}
						animate={firstInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
						src="https://placehold.co/300x300"
						className="w-full aspect-[1] object-cover rounded-[0.5rem]"
						alt=""
					/>
				</motion.div>

				{/* Second Block */}
				<motion.div
					ref={secondRef}
					initial={{ opacity: 0, y: 20 }}
					animate={secondInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full md:w-1/3 flex flex-col items-center justify-center p-[1.25rem] border-b-[2px] border-neutral-200"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={secondInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
						className="mb-[3vh] px-[1vw]"
					>
						<h2 className="text-[4.5vh] pb-[1vh]">Built For You</h2>
						<p className="text-[1.5vh] font-medium uppercase">
							Customizable quests, flexible goals, and visual progress. Design
							your own system that actually works.
						</p>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, y: 20 }}
						animate={secondInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
						src="https://placehold.co/300x300"
						className="w-full aspect-[1] object-cover rounded-[0.5rem]"
						alt=""
					/>
				</motion.div>

				{/* Third Block */}
				<motion.div
					ref={thirdRef}
					initial={{ opacity: 0, y: 20 }}
					animate={thirdInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="w-full md:w-1/3 flex flex-col items-center justify-between p-[1.5rem] py-[5vh] bg-neutral-200 rounded-[0.5rem]"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={thirdInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
						className="flex items-center justify-between w-full"
					>
						<h3 className="text-[3.5vh]">Pixelate</h3>
						<div className="flex items-center gap-[1.5vw]">
							<IoLogoInstagram size={24} />
							<LuLinkedin size={24} />
							<AiOutlineTikTok size={24} />
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={thirdInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
						className="px-[1rem]"
					>
						<h3 className="text-[5vh] mb-[1vh]">Join the Journey</h3>
						<h4 className="text-[2vh]">
							Stay connected for tips, updates, and exclusive sneak peeks.
							Follow us and level up your life every day.
						</h4>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={thirdInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
						className="pt-[1rem] border-t-2 border-neutral-300"
					>
						<p className="text-[2vh]">
							Life RPG is a passion project to help you turn daily habits into
							epic wins. Keep questing!
						</p>
					</motion.div>
				</motion.div>
			</div>

			{/* Footer Plus Icons */}
			<motion.div
				ref={bottomRef}
				initial={{ opacity: 0, y: 10 }}
				animate={bottomInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
				className="flex w-[90vw] mx-auto mt-[5vh]"
			>
				<div className="w-1/3 flex items-center justify-start">
					<p className="text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className="text-[4vh]">+</p>
					<p className="text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className="text-[4vh]">+</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Info;
