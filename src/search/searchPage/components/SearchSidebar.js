import React,{useState, useEffect} from 'react'

import "../css/SearchSidebar.css"

import Star from "../../../shared/res/svg/star-solid.svg"
import StarOutline from "../../../shared/res/svg/star-regular.svg"

function SearchSidebar({setFilters}) {
    const [filter, setFilter] = useState({department: ["all"], rating: "all", priceBetween: [0, 100000]});
    
    function toggleDepartment(event) {
        const department = findValueAttr(event.target);
        const departmentButtons = document.querySelectorAll('.departmentSingle');
        departmentButtons.forEach(button => {
            if(button.getAttribute('value') === department && !button.classList.contains('active')){
                button.classList.add('active')
            } else if(button.getAttribute('value') === department && button.classList.contains('active')){
                button.classList.remove('active')
            } else {
                button.classList.remove('active')
            }
        })
        if(department === filter.department[0]){
            setFilter({...filter, department: ["all"]})
        }else{
            setFilter({...filter, department: [department]})
        }
    }

    function toggleRating(event) {
        const rating = findValueAttr(event.target);
        const ratingButtons = document.querySelectorAll('.rating');
        ratingButtons.forEach(button => {
            if(button.getAttribute('value') === rating && !button.classList.contains('active')){
                button.classList.add('active')
            } else if(button.getAttribute('value') === rating && button.classList.contains('active')){
                button.classList.remove('active')
            } else {
                button.classList.remove('active')
            }
        })
        if(rating === filter.rating){
            setFilter({...filter, rating: "all"})
        }else{
            setFilter({...filter, rating: rating})
        }
    }

    function setPriceBetweenFunction() {
        const minimumPrice = document.getElementById('minimumPrice').value === "" ? 0 : document.getElementById('minimumPrice').value;
        const maximumPrice = document.getElementById('maximumPrice').value === "" ? 100000 : document.getElementById('maximumPrice').value;
        const priceBetweenButtons = document.querySelectorAll('.price');
        priceBetweenButtons.forEach(button => {
            button.classList.remove('active')
        })
        setFilter({...filter, priceBetween: [minimumPrice, maximumPrice]})
    }

    function priceBetweenButtons(e) {
        document.getElementById('minimumPrice').value = "";
        document.getElementById('maximumPrice').value = "";
        const priceBetweenButtons = document.querySelectorAll('.price');
        const value = findValueAttr(e.target);
        
        switch(value){
            case "25-":
                setFilter({...filter, priceBetween: [0, 25]})
                break;
            case "25-50":
                setFilter({...filter, priceBetween: [25, 50]})
                break;
            case "50-100":
                setFilter({...filter, priceBetween: [50, 100]})
                break;
            case "100-200":
                setFilter({...filter, priceBetween: [100, 200]})
                break;
            default:
                setFilter({...filter, priceBetween: [0, 100000]})
                break;
        }

        priceBetweenButtons.forEach(button => {
            if(button.getAttribute('value') === value && !button.classList.contains('active')){
                button.classList.add('active')
            } else if(button.getAttribute('value') === value && button.classList.contains('active')){
                setFilter({...filter, priceBetween: [0, 100000]})
                button.classList.remove('active')
            } else {
                button.classList.remove('active')
            }
        })
    }
            
            
    useEffect(() => {
        setFilters(filter)
    }, [filter])
    
    const findValueAttr = (e) => {
        while(e.getAttribute('value') === null && e.parentElement !== null){
            e = e.parentElement
        }
        return e.getAttribute('value')
    }

    const getParentDepartment = (e) => {
        const parents = [];
        while(e.getAttribute('value') === null && e.parentElement !== null){
            e = e.parentElement
            parents.push(e)
        }
        return e.getAttribute('value')
    }
    
    return (
        <section id='searchSidebar'>
        <div className='section'>
            <h3>Department</h3>
            <div className='department departmentSingle' value="all" onClick={(e) => toggleDepartment(e)}>
                <p>All</p>
            </div>
            <div className='department departmentSingle' value="clothes" onClick={(e) => toggleDepartment(e)}>
                <p>Clothes</p>
                <div className='subDepartment departmentSingle' value="shirts">
                    <p>Shirts</p>
                </div>
                <div className='subDepartment departmentSingle' value="t-shirts">
                    <p>T-Shirts</p>
                </div>
                <div className='subDepartment departmentSingle' value="pants">
                    <p>Pants</p>
                </div>
                <div className='subDepartment departmentSingle' value="shorts">
                    <p>Shorts</p>
                </div>
            </div>
            <div className='department departmentSingle' value="Accessories" onClick={(e) => toggleDepartment(e)}>
                <p>Accessories</p>
                <div className='subDepartment departmentSingle' value="watches">
                    <p>Watches</p>
                </div>
                <div className='subDepartment departmentSingle' value="jewelry">
                    <p>Jewelry</p>
                </div>
            </div>

        </div>
        <div className='section'>
            <h3>Customer Rating</h3>
            <p className='rating' value="4+" onClick={(e) => toggleRating(e)}>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
            <p className='rating' value="3+" onClick={(e) => toggleRating(e)}>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
            <p className='rating' value="2+" onClick={(e) => toggleRating(e)}>
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
            <p className='rating' value="1+" onClick={(e) => toggleRating(e)}>
                <img src={Star} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <img src={StarOutline} alt='Star' />
                <p>& Up</p>
            </p>
        </div>
        <div className='priceContainer'>
            <h3>Price</h3>
            <p className='price' onClick={(e) => priceBetweenButtons(e)} value="25-">Under 25$</p>
            <p className='price' onClick={(e) => priceBetweenButtons(e)} value="25-50">25$ to 50$</p>
            <p className='price' onClick={(e) => priceBetweenButtons(e)} value="50-100">50$ to 100$</p>
            <p className='price' onClick={(e) => priceBetweenButtons(e)} value="100-200">100$ to 200$</p>
            <p className='price' onClick={(e) => priceBetweenButtons(e)} value="200+">200$ & Above</p>
            <div id='priceBetweenContainer'>
                <input type='number' placeholder='$ Min' id='minimumPrice'/>
                <input type='number' placeholder='$ Max' id="maximumPrice"/>
                <button onClick={() => setPriceBetweenFunction()}>Go</button>
            </div>
        </div>
    </section>
  )
}

export default SearchSidebar