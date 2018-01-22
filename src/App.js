import React from 'react'
import ReactDOM from 'react-dom'
import { QueryRender, graphql } from 'react-relay'
import { Enviroment, Network, RecordSource, Store } from 'relay-runtime'

import Friends from  './components/Friends'

//Network layer
function fetchQuery ( operation, variables ) {
  return('/graphql', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return respone.json()
  })
}

//Relay Enviroment
const modernEnvironment = new Enviroment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()), 
})

const mountNode = document.getElementById('root')

reactDom.render(
  <QueryRender
    environment={modernEnvironment}
    query={graphql`
      query AppQuery {
        viewer {
          ...Friends_viewer
        }
      }
    `}
    variables={{}}
    render={({error, props})=> {
      if (props) {
        return <Friends viewer={props.viewer} />
      } else {
        return <div>Loading...</div>
      }
    }}
  />,
  mountNode
)
