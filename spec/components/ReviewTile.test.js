import React from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jest-enzyme';
import ReviewTile from '../../app/frontend/react/components/ReviewTile.js';

describe('<ReviewTile/>', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(
      <ReviewTile
        userEmail="test@gmail.com"
        rating="5"
        body="so good"
      />
    );
    expect(wrapper.find('.review-tile')).toHaveText('test@gmail.com5so good');
  });

  // it('should be selectable by class "foo"', function() {
  //   expect(shallow(<SimpleFoo />).is('.foo')).toBe(true);
  // });
  //
  // it('should mount in a full DOM', function() {
  //   expect(mount(<SimpleFoo />).find('.foo').length).toBe(1);
  // });
  //
  // it('should render to static HTML', function() {
  //   expect(render(<SimpleFoo />).text()).toEqual('Bar');
  // });
});
