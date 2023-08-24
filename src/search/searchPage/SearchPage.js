import React from 'react'
import { useParams } from 'react-router-dom'
import "./css/SearchPage.css"

import SearhSidebar from "./components/SearchSidebar"
import SearchItems from "./components/SearchItems"

import BoxView from "./res/table-cells-solid.svg"
import ListView from "./res/list-solid.svg"

function SearchPage() {
    let {query, category} = useParams();

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
    }

    function viewSelect() {
        const listView = document.getElementById('list');
        const boxView = document.getElementById('box');
        const slider = document.querySelector('.slider');
        const sliderButtons = document.querySelectorAll('.viewSelect label');
        if(listView.checked) {
            slider.style.left = '0%';
            sliderButtons[0].classList.add('active');
            sliderButtons[1].classList.remove('active');
        }else if(boxView.checked) {
            slider.style.left = '50%';
            sliderButtons[1].classList.add('active');
            sliderButtons[0].classList.remove('active');
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
                        <input type='radio' name='listOrBox' id='list' />
                        <label htmlFor='list' className='active'>
                            <img src={ListView} alt='List View' />
                        </label>
                        <input type='radio' name='listOrBox' id='box' />
                        <label htmlFor='box'>
                            <img src={BoxView} alt='Box View' />
                        </label>
                    </div>
                </div>
                <div id='sort'>
                    <div id='sortSelect' onClick={() => toggleSelect()}>
                        <p id='selectedSort'>Featured</p>
                    </div>
                    <div id='sortOptions'>
                        <span className='sortOption active' onClick={(e) => selectOption(e, 0)}>
                            <p>Featured</p>
                        </span>
                        <span className='sortOption' onClick={(e) => selectOption(e, 1)}>
                            <p>Price: Low to High</p>
                        </span>
                        <span className='sortOption' onClick={(e) => selectOption(e, 2)}>
                            <p>Price: High to Low</p>
                        </span>
                        <span className='sortOption' onClick={(e) => selectOption(e, 3)}>
                            <p>On Sale</p>
                        </span>
                        <span className='sortOption' onClick={(e) => selectOption(e, 4)}>
                            <p>Newest Arrivals</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div id='searchPageMain'>
            <div id='searchPageSideBar'>
                <SearhSidebar />
            </div>
            <div id='searchPageItems'>
                <SearchItems />
            </div>
        </div>
    </section>
  )
}

export default SearchPage