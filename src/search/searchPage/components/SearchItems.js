import React from 'react'

function SearchItems({listStyle, sort, filters}) {
  return (
    <section id='searchItems'>
      <p>{listStyle}</p>
      <p>{sort}</p>
      <div>
        {JSON.stringify(filters)}
      </div>
    </section>
  )
}

export default SearchItems