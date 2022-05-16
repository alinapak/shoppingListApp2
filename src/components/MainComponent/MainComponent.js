import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Cart} from "./cart.svg"
const MainComponent = () => (
  <>
    <div className="jumbotron text-center">
      <h1 className="display-4 m-3 p-3 bg-success text-light">Welcome to Shoping List App!</h1>
      <Cart/>
      <p className="lead m-3 p-3">Try this App and make your shopping easier</p>
      <Link className="btn btn-success btn-lg" to="/app" role="button">Create your Shopping List</Link>
    </div>
  </>
);

export default MainComponent;
