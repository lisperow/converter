import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const mapStateToProps = (state) => {
  const { ratesFetchingState, rates } = state;
  return { rates, ratesFetchingState };
};

class CurrenciesList extends React.Component {
  render() {
      const { rates, ratesFetchingState } = this.props;

      if (ratesFetchingState === 'requested') {
          return (
              <div>...Loading</div>
          );
      }

      if (ratesFetchingState === 'failed') {
          return (
              <div>Please, reload page</div>
          );
      }

      if (rates.length === 0) {
          return null;
      }

      return (
          <ul>
            {rates.map(({}) => ())}
          </ul>
      );
  }
}
