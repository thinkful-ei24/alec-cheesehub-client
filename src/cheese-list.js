import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from 'productActions';

class CheeseList extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchCheeses())
  }

  render(){
    if(this.props.error){
       return <div>Error! {error.message}</div>;
    }

    if(this.props.loading){
      return <div>Loading...</div>;
    }
    return (
      <ul>
      {this.cheeses.map(cheese =>
        <li key={product.id}>{product.name}</li>
      )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses;
});

export default connect(mapStateToProps)(CheeseList);
