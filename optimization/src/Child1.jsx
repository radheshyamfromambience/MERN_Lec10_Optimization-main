import React from 'react'

export default function Child1({name}) {

    var name1 = "Raj"

    console.log("Child1 Calling again.....");
    

  return (
    <div>
      <h1>Child1 called......{name} {name1}</h1>
    </div>
  )
}
