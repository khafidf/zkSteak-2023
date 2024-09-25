import { FaArrowRight } from "react-icons/fa";
import steakLB from "../../assets/left-bottom.png";
import steakLT from "../../assets/left-top.png";
import steakRB from "../../assets/right-bottom.png";
import steakRT from "../../assets/right-top.png";

const Home = () => {
	return (
		<div className="relative bg-[url('/src/assets/bg-two.jpg')] backdrop-blur-md overflow-hidden bg-cover bg-bottom flex items-center min-h-[758px]">
			<div className="container md:w-[782px] relative mx-auto">
				{/* Text Content */}
				<div className="flex flex-col items-center gap-8 px-4 text-center text-wrap">
					<h2 className="text-6xl font-semibold">
						Welcome to <br /> zkSteak
					</h2>
					<p className="text-base font-medium text-gray-200">
						zkSteak is an innovative meme token with a <br /> staking utility on
						zkSync era.
					</p>
					<button className="flex items-center justify-center gap-4 px-8 py-2 font-semibold bg-orange-400 rounded-full hover:text-orange-400 hover:bg-white">
						Buy Now <FaArrowRight />
					</button>
				</div>
				{/* Images Left */}
				<img
					src={steakLB}
					className="absolute left-0 w-48 -z-10 md:w-52 bottom-44 md:bottom-28 md:-left-4"
					alt="Steak Cartoon"
				/>
				<img
					src={steakLT}
					className="absolute left-0 w-48 -z-10 rotate-12 md:w-60 top-44 md:top-40 md:-left-5"
					alt="Steak Cartoon"
				/>
				{/* Images Right */}
				<img
					src={steakRB}
					className="absolute right-0 w-48 -z-10 bottom-44 md:bottom-36 md:-right-4"
					alt="Steak Cartoon"
				/>
				<img
					src={steakRT}
					className="absolute right-0 w-48 -z-10 -rotate-12 md:w-56 top-44 md:top-28 md:-right-8"
					alt="Steak Cartoon"
				/>
			</div>
		</div>
	);
};

export default Home;
