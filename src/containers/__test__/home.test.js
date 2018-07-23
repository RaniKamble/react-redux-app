import React from 'react';
import Home from '../home'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallowCompare } from '@uifabric/utilities';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Home Component', () => {
    const employeeID = {
        employeeIdList : [
            { key: '1', text: '1' },
            { key: '2', text: '2' },
            { key: '3', text: '3' },
            { key: '4', text: '4' },
            { key: '5', text: '5' },
        ], 
        dept : { key: "hr", text: "HR" }
    }

    let home = shallow(
        <Provider store={store}>
                 <Home {...employeeID}/>
        </Provider>
       
    )
    it('should render without throwing an error', () => {
        expect(home.exists()).toBe(true)
    })

    // it('should render a Department list', () => {
    //     expect(home.find('div')).toBe(true)
    // })

    // it('should render a Employee Id list', () => {
    //     expect(shallow(<Home />).find('#password').length).toEqual(1)
    // })
})