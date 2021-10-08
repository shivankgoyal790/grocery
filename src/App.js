import './App.css';
import Discount from './Discount';
import Footer from './Footer/Footer';
import Fruitandveggies from './Fruitandveggies';
import Mainnav from './Header/Mainnav';
import Headline from './Products/Headline';
import Productcontainer from './Products/Productcontainer';
import Shopnow from './Shopnow';
import Special from './Special/Special';
import Subscribe from './Subscribe';
import News from "./News/News"
import Feedback from "./Feedback/Feedback"
import Types from './Types/Types';
import Contact from './Contact/Conatct';
const App = () =>{
  return(
    <>
    <Contact/>
    <Mainnav/>
    <Shopnow/>
    <Fruitandveggies/>
    <Headline/>
    <Productcontainer/>
    <Discount/>
    <Special />
    <Feedback />
    <News />
    <Subscribe/>
    <Types/>
    <Footer/>

    </>
  )
}

export default App;
