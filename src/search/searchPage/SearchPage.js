import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./css/SearchPage.css"

import SearhSidebar from "./components/SearchSidebar"
import SearchItems from "./components/SearchItems"
import Loading from "../../shared/components/loading/Loading"

import BoxView from "./res/table-cells-solid.svg"
import ListView from "./res/list-solid.svg"

function SearchPage() {
    let {query, category} = useParams();
    const [loading , setLoading] = React.useState(true);
    const [listStyle, setListStyle] = React.useState('list');
    const [sort, setSort] = React.useState('featured');
    const [filters, setFilters] = React.useState({});
    const [items, setItems] = React.useState([]);


    useEffect(() => {
        fetchData()
        //setLoading(false)
    }, [])

    function fetchData () {
        setLoading(true)
        fetch(`${process.env.REACT_APP_APIURL}/product/search/${query}/${category}`)
        .then(response => response.json())
        .then(data => {
            setLoading(false)
            console.log(data)
            setItems(data)
        })
        .catch(error => {
            setLoading(false)
            console.log(error)
        })
    }

    function toggleSelect() {
        const selectMenu = document.getElementById('sortOptions');
        if(selectMenu.style.display === 'flex'){
            selectMenu.style.display = 'none'
        }else{
            selectMenu.style.display = 'flex'
        }
    }

    function selectOption(event, activeOption) {
        const selectedSort = document.getElementById('selectedSort');
        selectedSort.innerText = event.target.innerText;
        const selectMenu = document.getElementById('sortOptions');
        selectMenu.style.display = 'none'
        const sortOptions = document.querySelectorAll('.sortOption');
        sortOptions.forEach((option, index) => {
            if(index === activeOption) {
                option.classList.add('active')
            }else{
                option.classList.remove('active')
            }
        })
        setSort(event.target.getAttribute('value'))
    }

    function viewSelect() {
        const slider = document.querySelector('.slider');
        const labelOfRadio = document.querySelectorAll('.labelOfRadio');
        if(listStyle === 'list') {
            setListStyle('box')
            slider.style.left = '50%';
            labelOfRadio[0].classList.remove('active');
            labelOfRadio[1].classList.add('active');
        }else{
            setListStyle('list')
            slider.style.left = '0%';
            labelOfRadio[0].classList.add('active');
            labelOfRadio[1].classList.remove('active');
        }
    }

    document.addEventListener('click', function(event) {
        const selectMenu = document.getElementById('sortOptions');
        if(event.target.id !== 'sortSelect' && event.target.id !== 'selectedSort') {
            selectMenu.style.display = 'none'
        }
    });

  return (
    <section id='searchPage'>
        <div id='searchPageUpper'>
            <div id='searchPageUpperLeft'>
                <div id='searchResultInfo'>
                    <p>1-24 of 100 results for <span className='highlight'>"{query}"</span>{category && <span> in <span className='highlight'>"{category}"</span></span>}</p>
                </div>
            </div>
            <div id='upperRightContainer'>
                <div className='viewSelect'>
                    <div className='viewSlider' onClick={() => viewSelect()}>
                        <span className='slider' />
                        <span htmlFor='list' className='labelOfRadio active'>
                            <img src={ListView} alt='List View' />
                        </span>
                        <span htmlFor='box' className='labelOfRadio'>
                            <img src={BoxView} alt='Box View' />
                        </span>
                    </div>
                </div>
                <div id='sort'>
                    <div id='sortSelect' onClick={() => toggleSelect()}>
                        <p id='selectedSort'>Featured</p>
                    </div>
                    <div id='sortOptions'>
                        <span className='sortOption active' value="featured" onClick={(e) => selectOption(e, 0)}>Featured</span>
                        <span className='sortOption' value="lowToHigh" onClick={(e) => selectOption(e, 1)}>Price: Low to High</span>
                        <span className='sortOption' value="highToLow" onClick={(e) => selectOption(e, 2)}>Price: High to Low</span>
                        <span className='sortOption' value="sale" onClick={(e) => selectOption(e, 3)}>On Sale</span>
                        <span className='sortOption' value="new" onClick={(e) => selectOption(e, 4)}>Newest Arrivals</span>
                    </div>
                </div>
            </div>
        </div>
        <div id='searchPageMain'>
            <div id='searchPageSideBar'>
                <SearhSidebar filters={filters} setFilters={setFilters} />
            </div>
            <div id='searchPageItems'>
                {loading ? <Loading /> : <SearchItems listStyle={listStyle} sort={sort} filters={filters} items={items}/>}
            </div>
        </div>
    </section>
  )
}

export default SearchPage