import zksync from "../../assets/zksync-logo.png";

const Partner = () => {
	return (
		<div className="bg-black relative h-[486px] md:h-[400px]">
			<div className="container mx-auto">
				<div className="flex flex-col h-[486px] md:h-[400px] items-center justify-center">
					<div className="grid grid-cols-2 gap-20 md:grid-cols-4">
						<img src={zksync} alt="zkSync Logo" />
						<img src={zksync} alt="zkSync Logo" />
						<img src={zksync} alt="zkSync Logo" />
						<img src={zksync} alt="zkSync Logo" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;
