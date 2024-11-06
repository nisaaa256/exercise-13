import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Client from "./Components/Sections/Client"
import Features from "./Components/Sections/Features"
import Hero from "./Components/Sections/Hero"
import Pricing from "./Components/Sections/Pricing"
const App = () => {
  return (
    <div class="body-wrap">
			<Header/>
			<main class="site-content">
				<Hero/>
				<Client/>
				<Features/>
				<Pricing/>
			</main>
			<Footer/>
		</div>
  )
}
export default App;