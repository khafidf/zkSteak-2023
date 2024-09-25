import { FaAngleDown, FaPlus } from "react-icons/fa";
import logoZksteak from "../../assets/logo-zksteak.png";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	const openNav = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const nav = ["Home", "Steaking", "Tokenomics", "Roadmap"];

	return (
		<nav className="mx-auto relative z-10 bg-black">
			<div className="container flex justify-evenly items-center mx-auto">
				<a href="#">
					<img src={logoZksteak} width={200} alt="Logo Zksteak" />
				</a>

				<ul
					className={`absolute ${
						open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
					} top-0 left-0 w-full h-screen transform md:translate-y-0 md:static md:opacity-100 md:h-auto md:gap-0 md:w-auto md:flex-row transition-transform duration-500 ease-in-out bg-black flex flex-col gap-8 justify-center items-center`}
				>
					{nav.map((item: string, id) => (
						<li
							className="cursor-pointer font-semibold text-3xl md:text-base p-4 hover:text-orange-400"
							key={id}
						>
							<a href="#">{item}</a>
						</li>
					))}
					<div className="z-10 absolute rounded-full md:hidden p-2 bottom-20 hover:text-orange-400 cursor-pointer border border-white">
						<FaPlus className="rotate-45" onClick={openNav} size={36} />
					</div>
				</ul>

				<button className="border hover:text-orange-400 border-white py-2 px-8 rounded-full font-semibold">
					Join Telegram
				</button>
			</div>
			<div
				className={`absolute md:hidden transform transition-transform duration-500 ease-in-out ${
					open ? "opacity-0" : "opacity-100"
				} border-white border-b px-2 pb-1 pt-6 rounded-full -translate-x-1/2 hover:text-orange-400 cursor-pointer -bottom-7 left-1/2`}
			>
				<FaAngleDown size={36} onClick={openNav} />
			</div>
		</nav>
	);
};

export default Navbar;
