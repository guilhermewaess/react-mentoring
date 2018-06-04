import * as React from 'react';

export default props => (
  <div className="text-center font-weight-bold pt-2 pb-2">
    Films by: {props.movie.genres.toString().replace(/,/g, ' - ')}
  </div>
);
