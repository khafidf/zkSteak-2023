const Roadmap = () => {
	return (
		<div className="bg-[#252424] h-fit py-12 relative">
			<div className="flex flex-col">
				<div className="text-center">
					<h2 className="mb-2 text-xs font-semibold text-gray-400 uppercase">
						Roadmap
					</h2>
					<h3 className="text-xl font-semibold text-orange-400">What next?</h3>
				</div>
				<div className="relative left-1/2 -translate-x-1/2 w-[482px] md:w-[640px]">
					<div className="absolute h-[368px] w-0.5 transform -translate-x-1/2 top-[69px] left-1/2 bg-gray-600" />
					<div className="absolute w-2 h-2 transform -translate-x-1/2 z-10 bg-orange-400 rounded-full top-[69px] left-1/2" />
					<div className="absolute invisible md:visible w-16 h-0.5 bg-gray-600 z-0 rounded-full top-[72px] left-64" />
					<div className="absolute w-2 h-2 transform -translate-x-1/2 z-10 bg-orange-400 rounded-full top-[225px] left-1/2" />
					<div className="absolute invisible md:visible w-16 h-0.5 bg-gray-600 z-0 rounded-full top-[228px] left-80" />
					<div className="absolute w-2 h-2 transform -translate-x-1/2 z-10 bg-orange-400 rounded-full bottom-[102px] left-1/2" />
					<div className="absolute invisible md:visible w-16 h-0.5 bg-gray-600 z-0 rounded-full bottom-[105px] left-64" />
					{/* 1 */}
					<div className="relative flex w-[240px] top-7 md:mr-4 text-end">
						<div className="flex flex-col gap-2 w-[95%] pl-2">
							<h2 className="font-semibold">March 2023</h2>
							<ul className="text-sm text-gray-400 list-disc list-inside">
								<li>Finalize the concept and theme for zkSteak</li>
								<li>
									Begin marketing and promotional activities to build a
									community ahead
								</li>
								<li>Steaking utility</li>
							</ul>
							<div className="flex justify-end">
								<p className="px-3 text-xs font-semibold border border-green-600 rounded-full">
									March/80%
								</p>
							</div>
						</div>
					</div>
					{/* 2 */}
					<div className="relative flex w-[240px] md:ml-20 top-2 left-1/2">
						<div className="flex flex-col gap-2 w-[95%] pl-2">
							<h2 className="font-semibold">Q2 2023</h2>
							<ul className="text-sm text-gray-400 list-disc list-inside">
								<li>
									Develop the limited edition NFT platform and launch the first
									set of cute monster NFTs
								</li>
								<li>Begin the initial testing pharse for NFT staking</li>
							</ul>
							<div className="flex justify-start">
								<p className="px-3 text-xs font-semibold border border-green-600 rounded-full">
									Q2/80%
								</p>
							</div>
						</div>
					</div>
					{/* 3 */}
					<div className="relative flex w-[240px] -top-3 text-end">
						<div className="flex flex-col gap-2 w-[95%] pl-2">
							<h2 className="font-semibold">Q3 2023</h2>
							<ul className="text-sm text-gray-400 list-disc list-inside">
								<li>
									Introduce new use cases for $STEAK such as exclusive access to
									$STEAK merchandise
								</li>

								<li>Build NFT</li>
							</ul>
							<div className="flex justify-end">
								<p className="px-3 text-xs font-semibold border border-orange-600 rounded-full">
									March/80%
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
