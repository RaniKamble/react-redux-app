const Enzyme = require('enzyme');
// this is where we reference the adapter package we installed  
// earlier
const EnzymeAdapter = require('enzyme-adapter-react-16');
// This sets up the adapter to be used by Enzyme

import { shallow, render, mount, configure } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });
//Sets the global for later use in each test case
global.shallow = shallow;

global.render = render;

global.mount = mount;