import React from 'react';
import App from '../app'
import Home from '../home'

describe('App Component', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<App/>).exists()).toBe(true)
    })
})
