
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as enzymeMatchers from '@commercetools/jest-enzyme-matchers';

Enzyme.configure({ adapter: new Adapter() });

expect.extend(enzymeMatchers);
