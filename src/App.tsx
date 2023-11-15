import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg={"yellow"}>
        Nav
      </GridItem>

      <Show above="lg">
        <GridItem area={"aside"} bg={"dodgerblue"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"palegreen"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
