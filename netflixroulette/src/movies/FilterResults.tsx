import * as React from 'react';

export class FilterResults extends React.Component {
  public render() {
    return (
      <div className='mb-2 d-flex flex-row justify-content-between'>
        <div>X Movies found</div>
        <div>
          Sort by:
          <select name="" id="">
            <option>Release</option>
          </select>
        </div>
      </div>
    )
  }
}