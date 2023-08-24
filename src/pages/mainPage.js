import Header from '../components/header/header';
import HeroSection from '../sections/hero/hero';
import ProgramSec from '../sections/program/program';
import FeesStructure from '../sections/feesStructure/feesStructure';
import Footer from '../sections/footer/footer';
import Cards from '../sections/cards/cards';
import About from '../sections/about/about';


function MainPage() {
  return (
    <main>
      <Header/>
      <HeroSection/>
      <ProgramSec/>
      <FeesStructure/> 
      <About/>
      <Footer/>
      <Cards/>
    </main>
  );
}

export default MainPage;