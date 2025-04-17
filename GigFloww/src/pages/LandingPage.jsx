
import Navigation from '../components/Navigation.jsx';
import Footer from '../components/Footer.jsx';
import About from '../components/About.jsx';
import { Features } from '../components/Features.jsx';
import { CTA } from '../components/CTA.jsx';
import Hero from '../components/Hero.jsx';

export default function GigFlowwLandingPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white text-gray-800">
      <Navigation></Navigation>
            <Hero></Hero>
            <About></About>
            <Features></Features>
            <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}