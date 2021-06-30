// write your CatList component here
import React from 'react'

const CatList = (props) => {
  const catpics = props.catPics.map( (cat) => {
      return <img src={cat.url} key={cat.id} />
    })

  return (
    <div>
      {catpics}
    </div>
  )
}

export default CatList