import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { SocialMedia } from "./components/social-media";
import { ProductImages } from "./components/product";
import '../sass/style.sass';


function App() {
  return (
    <section>
      <Header />
      <Hero />
      <SocialMedia />
      <ProductImages />
    </section>
  );
}

export default App;

