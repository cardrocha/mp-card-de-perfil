import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	MailOpenIcon,
} from "lucide-react";
import { useState } from "react";

import reactLogo from '../assets/react.svg'
import typescriptLogo from '../assets/typescript.png'
import tailwindLogo from '../assets/tailwind.png'
import nextLogo from '../assets/next.svg'

const ProfilePerfil = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="w-[362px] h-[242px] mx-auto text-2xl bg-gray-200 text-white border border-gray-200 rounded-xl shadow-2xl">
			<div className="flex py-8 px-10 gap-8">
				<img
					className="w-29 rounded-[142px] border-2 border-blue-900"
					src="https://github.com/cardrocha.png"
					alt=""
				/>
				<div className="text-black">
					<div className="flex flex-col gap-1.5">
						<div className="flex flex-col">
							<strong className="text-xl whitespace-nowrap">
								Ricardo Rocha
							</strong>
							<span className="text-xs text-gray-500">Front-end Developer</span>
						</div>
						<div className="flex gap-1.5">
							<a
								href="https://github.com/cardrocha"
								target="_blank"
								rel="noreferrer"
							>
								<GithubIcon className="bg-gray-500 hover:bg-gray-400 text-white w-5 h-5 p-[2px] rounded-sm cursor-pointer" />
							</a>
							<a
								href="https://instagram.com/cardrocha"
								target="_blank"
								rel="noreferrer"
							>
								<InstagramIcon className="bg-gray-500 hover:bg-fuchsia-500 text-white w-5 h-5 p-0.5 rounded-sm cursor-pointer" />
							</a>
							<a
								href="https://linkedin.com/in/cardrocha"
								target="_blank"
								rel="noreferrer"
							>
								<LinkedinIcon className="bg-gray-500 hover:bg-blue-500 text-white w-5 h-5 p-[2px] rounded-sm cursor-pointer" />
							</a>
						</div>
						<button
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
							className="flex gap-3 items-center bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 cursor-pointer py-1 px-5 text-white text-xs font-semibold rounded-sm"
							type="button"
						>
							{isHovered ? (
								<MailOpenIcon className="w-4 pb-1" />
							) : (
								<MailIcon className="w-4" />
							)}
							Mensagem
						</button>
					</div>
				</div>
			</div>
			<hr className="text-gray-300 w-80 mx-auto" />
			<div className="flex gap-3 justify-center mx-auto mt-1">
				<img className="w-12 cursor-pointer" title="react.js" src={reactLogo} alt="" />
				<img className="cursor-pointer" title="typescript" src={typescriptLogo} alt="" />
				<img title="next.js" className="w-12 cursor-pointer" src={nextLogo} alt="" />
				<img className="cursor-pointer" title="tailwind css" src={tailwindLogo} alt="" />
			</div>
		</div>
	);
};

export default ProfilePerfil;
