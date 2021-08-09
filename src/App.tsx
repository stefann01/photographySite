import "./App.css";

import React from "react";
import Header from "./components/Header/header";
import PillarCarousel from "./components/PillarCarousel/pillarCarousel";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import cube from "./assets/products/cube.png";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Link,
  withRouter,
} from "react-router-dom";
import StackedCarousel from "./components/StackedCarousel/stackedCarousel";
import SingleRotateCarousel from "./components/SingleRotateCarousel/SingleRotateCarousel";
import LandingPage from "./components/LandingPage/landingPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/portraits" component={PillarCarousel}>
            <PillarCarousel images={[img1, img2, img3, img4, img5]} />
          </Route>
          <Route exact path="/stacked-carousel" component={StackedCarousel}>
            <StackedCarousel images={[img1, img2, img3, img4, img5, cube]} />
          </Route>
          <Route exact path="/single-rotate" component={SingleRotateCarousel}>
            <SingleRotateCarousel images={[img1, img2, img3, img4, img5]} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
