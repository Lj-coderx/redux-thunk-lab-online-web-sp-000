import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props)
    console.log(this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {/* missing component */}
        {this.props.loading ? <h2>Loading...</h2> : <CatList catPics={this.props.catPics} />}
      </div>
    );
  }
}

//passing in the state from the Redux store
const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)