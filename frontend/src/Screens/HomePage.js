import React from 'react';
import Navbar from '../Components/Navbar';
import styles from './HomePage.module.css';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return <div className={styles.container}></div>;
  }
}
export default HomePage;
