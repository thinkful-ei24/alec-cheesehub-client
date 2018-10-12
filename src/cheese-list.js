import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from './actions';

class CheeseList extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  render(){
    if(this.props.error){
       return <div>Error! {this.props.error}</div>;
    }

    if(this.props.loading){
      return <div>Loading...</div>;
    }
    return (
      <ul>
      {this.props.cheeses.map(cheese =>
        <li key={cheese}>{cheese}</li>
      )}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    cheeses: state.cheeseReducer.cheeses,
    loading: state.cheeseReducer.loading,
    error: state.cheeseReducer.error
  };
};

export default connect(mapStateToProps)(CheeseList);
