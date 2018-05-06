import * as React from 'react';
import { ICommonProps } from '../core/interfaces';

export default (props: ICommonProps) => (
  <div className="text-center font-weight-bold pt-2 pb-2">
    Films by {props.movie.genres[0]}
  </div>
);
