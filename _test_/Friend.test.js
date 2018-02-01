import Friend from '../src/components/Friend'

import { Environment } from 'relay'
import React from 'react'
import { mount } from 'enzyme'
import jsdom from 'mocha-jsdom'
import renderer from 'react-test-renderer'

RelayStore.reset(
	new Relay.DefaultNetworkLayer('http://localhost:8080/graphiql')
);

describe('Main entry of app test', () => {

	test('renders correctly', function() {

		const fixtures = {
			friend: {
				id: 'RnJpZW5kOmRmMjVlNzIwYjcyMTg0Mjk1ZDlk',
				__fragments: {},
				__id: 'RnJpZW5kOmRmMjVlNzIwYjcyMTg0Mjk1ZDlk'
			},
			viewer: {
				friends: {},
				id: 'VXNlcjox',
				__fragments: {},
				__id: 'VXNlcjox'
			}
		}
		const tree = renderer.create(<Friend {...fixtures} />).toJSON()

		expect(tree).toMatchSnapshot()
	})
})

// describe('Components Test', function() {
//     describe('<Friend />', () => {

//     console.log(Friend);
	
//     const fixtures = {
//         "friend": {
//             "id": "RnJpZW5kOmRmMjVlNzIwYjcyMTg0Mjk1ZDlk",
//             "__fragments": {},
//             "__id": "RnJpZW5kOmRmMjVlNzIwYjcyMTg0Mjk1ZDlk"
//         },
//         "viewer": {
//             "friends": {},
//             "id": "VXNlcjox",
//             "__fragments": {},
//             "__id": "VXNlcjox"
//         }
//     }

//         it('calls componentDidMount', () => {
//             mount(<Friend />, { context: { relay: new Environment } } )
//             expect(Friend.prototype.componentDidMount.calledOnce).to.equal(true)
//         })

//     })
// })

