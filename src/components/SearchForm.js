import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchVal = React.useRef('')
  React.useEffect(()=>{
    searchVal.current.focus()
  },[])
  const searchCocktail = () =>{
    setSearchTerm(searchVal.current.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <section className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your cocktails</label>
          <input type="text" id='name' ref={searchVal} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
