import { Container } from "react-bootstrap";
import Title from "./components/Title";
import ImageRecipe from "./components/ImageRecipe";
import RecipeContainer from "./components/RecipeContainer";

function App() {
  return (
    <Container>
      <Title />
      <main>
        <ImageRecipe />
        <RecipeContainer />
      </main>
      <footer className='footer'>
        Reynaldo Josué Cano Bárcenas@DevChallenges.io
      </footer>
    </Container>
  );
}

export default App;
