import rocket from "../../assets/rocket.png";

const Utility = () => {
	const utilityContent = [
		{
			title: "Community Focused",
			text: "Community Focused and fair launch. The dev team burned all of their tokens and participated with everyone else.",
		},

		{
			title: "Locked Liquidity",
			text: "100% of initial LP tokens locked for 30days, and will be extended.",
		},

		{
			title: "Steaking Utility",
			text: "zkSync utility is staking, where you will be able to stake youe token and will get a reward.",
		},
	];
	return (
		<div className="relative py-12 bg-black h-fit">
			<div className="container flex flex-col items-center gap-16 mx-auto md:gap-20">
				<div className="flex flex-col gap-4 justify-center md:flex-row md:w-full md:gap-12 w-[278px]">
					<div>
						<h2 className="text-base font-semibold text-gray-400">zkSteak</h2>
						<h3 className="text-4xl font-semibold text-orange-400">
							What make use
							<br />
							different?
						</h3>
					</div>
					<p className="text-gray-400 md:align-bottom pt-7 md:w-[378px]">
						As the first project with a staking utility token on the zkSync
						network, zkSteak is at the forefront of the meme token utility
						staking revolution.
					</p>
				</div>
				<div className="flex flex-col md:flex-row md:gap-8 gap-16 [&>*:nth-child(2)]:h-[208px]">
					{utilityContent.map(
						({ title, text }: { title: string; text: string }, id: number) => (
							<div
								key={id}
								className="bg-[#252424] w-[278px] rounded-lg text-center flex flex-col pt-12 gap-2 px-4 justify-center relative h-[228px]"
							>
								<img
									src={rocket}
									className="absolute transform -translate-x-1/2 -top-20 left-1/2"
									alt="Rocket and Moon"
								/>
								<h2 className="text-lg font-semibold uppercase">{title}</h2>
								<p className="text-sm text-gray-400">{text}</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Utility;
