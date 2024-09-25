import AboutUs from "./Components/About Us/AboutUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Partner from "./Components/Partner/Partner";
import Roadmap from "./Components/Roadmap/Roadmap";
import Utility from "./Components/Utility/Utility";

function App() {
	return (
		<>
			{/* Navbar */}
			<header>
				<Navbar />
			</header>
			{/* Home */}
			<section>
				<Home />
			</section>
			{/* About us */}
			<section>
				<AboutUs />
			</section>
			{/* Partner */}
			<section>
				<Partner />
			</section>
			{/* Utility */}
			<section>
				<Utility />
			</section>
			{/* Roadmap */}
			<section>
				<Roadmap />
			</section>
			{/* Footer */}
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
