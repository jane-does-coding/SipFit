"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Banner = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<div className="mb-[10vh]">
			<motion.img
				ref={ref}
				initial={{ opacity: 0, y: 10 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
				src="/img1.png"
				className="w-[90vw] border-[1px] border-slate-500 mx-auto rounded-[3vh] h-[66.5vh] object-cover"
				alt=""
			/>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 10 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
				className="flex w-[90vw] mx-auto mt-[0.25rem]"
			>
				<div className="w-1/3 flex items-center justify-start">
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-between">
					<p className=" text-[4vh]">+</p>
					<h3 className="uppercase font-semibold text-[2.5vh] steiner tracking-[2px]">
						Sroll to Explore
					</h3>
					<p className=" text-[4vh]">+</p>
				</div>
				<div className="w-1/3 flex items-center justify-end">
					<p className=" text-[4vh]">+</p>
				</div>
			</motion.div>
		</div>
	);
};

export default Banner;
