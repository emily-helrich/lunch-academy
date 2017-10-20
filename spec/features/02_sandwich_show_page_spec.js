// This test suite is not running with rake, needs to run on karma/possibly jasmineEnzyme.  We couldn't get it to work but the show pages are working, planning to come back to this test later. -Denise and Dan

import SandwichShow from '../../../../app/frontend/components/SandwichShow.js';
import SandwichTile from '../../../../app/frontend/components/SandwichTile.js'

describe('SandwichTile', () => {
  let id, name, image_url;

  beforeEach(() => {
    // # jasmineEnzyme();
    wrapper = mount(
      <SandwichTile
        id: 1,
        name: 'rakeSandwich',
        image_url: 'https://i.imgur.com/Epv7i4V.png'
      />
    );
  });

  it('should have specified the initial state', () => {
    expect(wrapper.state().toEqual({ id: null }))
  })

  it('should render a SandwichTile Component', () => {
    expect(wrapper.find(SandwichTile)).toBePresent();
  })

  it('should render a SandwichTile Component without specific props when data is null', () => {
    expect(wrapper.find(SandwichTile)).toHaveProp('id', '')
  })

  it('should render a SandwichTile Component with specific props when data is not null', () => {
    wrapper.setState({id: 1})
    expect(wrapper.find(SandwichTile)).toHaveProp('name', 'rakeSandwich')
  })
})
