import vrGirl from "../../assets/vr-girl.png";

const AboutUs = () => {
	return (
		<div className="bg-black relative h-[586px] md:h-[400px]">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row h-[586px] gap-12 md:h-[400px] md:gap-24 justify-center items-center">
					{/* Image */}
					<img
						src={vrGirl}
						width={320}
						className="shadow-[24px_24px_0px_8px_#4a5568] rounded-md"
						alt="VR Girl"
					/>
					{/* Text */}
					<div className="flex flex-col gap-2">
						<h3 className="text-gray-400 text-xs font-semibold">ABOUT US</h3>
						<h2 className="text-orange-400 text-2xl font-semibold">
							Who we are?
						</h2>
						<p className="text-gray-400 text-sm w-96">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit quae
							dignissimos suscipit eligendi sequi facilis autem atque,
							cupiditate molestiae quasi.
						</p>
						<div className="flex gap-8">
							<div>
								<h4 className="font-semibold text-2xl">1.1k</h4>
								<p className="text-gray-400 text-sm">Artworks</p>
							</div>
							<div>
								<h4 className="font-semibold text-2xl">2.9k+</h4>
								<p className="text-gray-400 text-sm">Collectors</p>
							</div>
							<div>
								<h4 className="font-semibold text-2xl">1.1k</h4>
								<p className="text-gray-400 text-sm">Artist</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
