import React from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jest-enzyme';
import ReviewTile from '../../app/frontend/react/components/ReviewTile.js';

describe('<ReviewTile/>', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(
      <ReviewTile />
    );
    expect(wrapper.find('.review-tile')).toBePresent();
  });
  it('should render user email, rating, and review body', () => {
    const wrapper = mount(
      <ReviewTile
        userEmail="test@gmail.com"
        rating="5"
        body="so good"
      />
    );
    expect(wrapper.find('.email')).toHaveText("test@gmail.com");
    expect(wrapper.find('.rating')).toHaveText("5");
    expect(wrapper.find('.rating-body')).toHaveText("so good");
  });
});
