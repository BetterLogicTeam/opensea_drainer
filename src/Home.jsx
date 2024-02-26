import React from "react";
import Landing_page from "./Components/Landing_page/Landing_page";
import Cards_landing from "./Components/Cards_landing/Cards_landing";
import Gallary from "./Components/Gallary/Gallary";
import System from "./Components/System/System";
import Newsroom from "./Components/Newsroom/Newsroom";
import Started from "./Components/Started/Started";

export default function Home() {
  return (
    <div>
      <Landing_page />
      <Cards_landing />
      <Gallary />
      <System />
      <Newsroom />
      <Started />
    </div>
  );
}
