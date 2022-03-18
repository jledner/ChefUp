import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LandingPage } from "./pages/landingpage";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";
import { RecipeDetails } from "./pages/recipedetails";
import { Tutorial } from "./pages/tutorial";
import { BrowsePage } from "./pages/browsepage";
import { ProfilePage } from "./pages/profilepage.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="container">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/meals/details/:mealid"
              component={RecipeDetails}
            />
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/tutorial">
              <Tutorial />
            </Route>
            <Route exact path="/meals/browse/:query" component={BrowsePage} />
            <Route exact path="/browse">
              <BrowsePage />
            </Route>
            <Route exact path="/profilepage/:theuser">
              <ProfilePage />
            </Route>

            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
