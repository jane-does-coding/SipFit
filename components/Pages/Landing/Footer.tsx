"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoChevronUpOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const Footer = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className="flex justify-between w-[90vw] mx-auto pb-[4vh]"
		>
			{/* Left Link */}
			<motion.a
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
				className="flex gap-[1vw] items-center justify-center cursor-pointer"
			>
				Back to the top <IoChevronUpOutline size={20} />
			</motion.a>

			{/* Center Title */}
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
				className="font-semibold text-[2.25vh] text-indigo-500"
			>
				SipFit
			</motion.h2>

			{/* Right Link */}
			<motion.a
				initial={{ opacity: 0, y: 20 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
				className="cursor-pointer"
			>
				Join Us
			</motion.a>
		</motion.div>
	);
};

export default Footer;
