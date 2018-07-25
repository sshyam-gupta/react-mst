import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <section className="vh-100 bg-washed-blue baskerville">
        <header className="tc ph5 lh-copy">
          <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight blue">
            404
          </h1>
          <h2 className="tc f1-l fw1">
            Sorry, we can't find the page you are looking for.
          </h2>
        </header>
        <p className="fw1 i tc mt4 mt5-l f4 f3-l">
          Are you looking for one of these?
        </p>
        <ul className="list tc pl0 w-100 mt5">
          <li className="dib">
            <Link className="f5 f4-ns link black db pv2 ph3 hover-blue" to="/">
              Home
            </Link>
          </li>
          <li className="dib">
            <Link
              className="f5 f4-ns link black db pv2 ph3 hover-blue"
              to="/products"
            >
              Product
            </Link>
          </li>
        </ul>
      </section>
    );
  }
}

export default PageNotFound;
