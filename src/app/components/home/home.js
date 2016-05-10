import React from 'react'
import { Link } from 'react-router'
import styles from './home.css';

const Home = () => <div>
  <h1 className={ styles.title }>
    New ...Home page
  </h1>
  <section>
    <div className="row">
      <div className="col-xs-6">
        <Link to="/login">Login</Link>
      </div>
      <div className="col-xs-6">
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  </section>
</div>

export default Home
