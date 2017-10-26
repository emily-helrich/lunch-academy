import React from 'react';
import { shallow, mount, render } from 'enzyme';
import 'jest-enzyme';
import sinon from 'sinon';

import ReviewsContainer from '../../app/frontend/react/components/ReviewsContainer.js';

describe('<ReviewsContainer/>', () => {

  const mockReviews = [
    {
      "id": 1,
      "user_id": 1,
      "sandwich_id": 1,
      "rating": 5,
      "body": "lksdjfkldsjflsdkjfkldsjfsdlkfjdsklfj",
      "created_at": "2017-10-19T20:20:49.150Z",
      "updated_at": "2017-10-19T20:20:49.150Z",
      "vote_count": 4,
      "user": { "email": "sldkfj@sdfs.com" }
    },
  ];

  it('should render a <ReviewTile /> component', () => {
    const wrapper = shallow(<ReviewsContainer />);
    expect(wrapper.find('.review-list')).toBePresent();
  });

});
