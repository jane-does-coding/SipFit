"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { LuMilk } from "react-icons/lu";

const Navbar = () => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();

	return (
		<div className="flex w-[90vw] mx-auto mt-[5vh] mb-[3vh]">
			<motion.h1
				ref={ref}
				initial={{ opacity: 0, y: 10 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, ease: "easeOut" }}
				className="text-[4vh] flex gap-[2vw] text-indigo-500 items-start justify-start w-1/5 font-semibold uppercase steiner tracking-[2px]"
			>
				<LuMilk className="text-[4.25vh]" />
				SipFit
			</motion.h1>
			<motion.p
				ref={ref}
				initial={{ opacity: 0, y: 10 }}
				animate={inView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
				className="text-[3.25vh] w-2/5"
			>
				Level up your daily life and daiy meals smart! Sip Fit is your first
				step to making healthier meals and making smart decisions.
			</motion.p>
			<div className="flex w-2/5 gap-[1rem] items-start justify-end">
				<motion.button
					ref={ref}
					initial={{ opacity: 0, y: 10 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
					onClick={() => loginModal.onOpen()}
					className=" uppercase text-[0.75rem] font-semibold bg-indigo-500 px-[1.5rem] py-[0.5rem] h-fit w-fit text-white rounded-full"
				>
					Log In •
				</motion.button>
				<motion.button
					ref={ref}
					initial={{ opacity: 0, y: 10 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
					onClick={() => registerModal.onOpen()}
					className=" uppercase text-[0.75rem] font-semibold shadow-md bg-neutral-100 px-[1.5rem] py-[0.5rem] h-fit w-fit text-black rounded-full"
				>
					Sign Up
				</motion.button>
			</div>
		</div>
	);
};

export default Navbar;
