import { FaPaperPlane, FaXTwitter } from "react-icons/fa6";
import zkSteak from "../../assets/logo-zksteak.png";

const Footer = () => {
	return (
		<div className="relative py-4 bg-black h-fit">
			<div>
				<div className="flex items-center justify-around pt-4 pb-8">
					<div className="cursor-pointer">
						<img src={zkSteak} width={120} alt="zkSteak Logo" />
					</div>
					<div className="flex gap-4">
						<FaPaperPlane className="text-orange-400 cursor-pointer rotate-6" />
						<FaXTwitter className="text-orange-400 cursor-pointer" />
					</div>
				</div>
				<div className="w-[98%] h-0.5 bg-gray-900 mx-auto" />
				<div className="flex pt-4 md:w-[60%] w-[70%] mx-auto">
					<p className="text-sm text-gray-400">
						Copyright 2023 zkSteak | Powered by zkSync Era
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
