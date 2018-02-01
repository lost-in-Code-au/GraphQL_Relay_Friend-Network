import React from 'react'
import App from '../src/App'
import renderer from 'react-test-renderer'

describe('Main entry of app test' () => {

    it('renders correctly', () => {
        const tree = renderer.create(<App />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})