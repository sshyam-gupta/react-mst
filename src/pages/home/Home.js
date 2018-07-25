import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <section className="vh-75 bg-washed-blue">
        <header className="tc ph5 lh-copy">
          <h1 className="f1 f-headline-l mb3 fw9 parisienne blue">Its Home!</h1>
        </header>
        <p className="fw1 i tc mt4 mt5-l f4 f3-l baskerville">
          Are you looking for one of these?
        </p>
        <ul className="list tc pl0 w-100 mt5">
          <li className="dib baskerville">
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

export default Home;
