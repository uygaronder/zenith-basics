import React, { useEffect } from 'react'
import "../css/ProductSlider.css"

import SaleIcon from "../../shared/res/svg/tag-solid.svg"

import ProductMicro from "../../shared/components/product/ProductMicro"

function slideProducts(id,direction){
  const arrow = document.getElementById(id);
  
  if(!arrow.classList.contains('available')){  return;  }
  let saleProducts = document.getElementById('saleProducts');
  let saleProductsWidth = saleProducts.scrollWidth - saleProducts.clientWidth;
  let currentPos = saleProducts.scrollLeft;
  const scrollAmount = saleProductsWidth/2;

  console.log(saleProducts.scrollLeft)
  if(direction === "left"){
    saleProducts.scrollLeft -= scrollAmount;
    currentPos -= scrollAmount;
  }else if(direction === "right"){
    saleProducts.scrollLeft += scrollAmount;
    currentPos += scrollAmount;
  }
  console.log(saleProducts.scrollLeft)

  if(currentPos - (scrollAmount/2) <= 0){
    document.getElementById('leftArrow').classList.remove('available');
  }else{
    document.getElementById('leftArrow').classList.add('available');
    console.log("leftArrow available")
  }

  if(currentPos + (scrollAmount/2) >= saleProductsWidth){
    document.getElementById('rightArrow').classList.remove('available');
  }else{
    document.getElementById('rightArrow').classList.add('available');
    console.log("rightArrow available")
  }
  
}

function ProductsSlider({type , products, site}) {
  useEffect(() => {
    if(type === "flashSale"){
      flashSaleTimer();
    }
  }, [])


  if(site.flashSale && type === "flashSale"){
    const flashSaleIds = site.flashSale.products.map(product => product.id);
    products = products.filter(product => flashSaleIds.includes(product._id));
  }

  function flashSaleTimer(){
    const saleTimer = document.querySelector('.saleTimer');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    //sale end time is 1 hour 23 minutes from now
    const saleEnd = new Date(Date.now() + 1*60*60*1000 + 23*60*1000);

    setInterval(() => {
      const now = new Date();
      const timeLeft = saleEnd - now;
      
      let hoursLeft = Math.floor(timeLeft / (1000*60*60));
      if(hoursLeft < 10){
        hoursLeft = "0" + hoursLeft;
      }
      let minutesLeft = Math.floor((timeLeft / (1000*60)) % 60);
      if(minutesLeft < 10){
        minutesLeft = "0" + minutesLeft;
      }
      let secondsLeft = Math.floor((timeLeft / 1000) % 60);
      if(secondsLeft < 10){
        secondsLeft = "0" + secondsLeft;
      }

      hours.innerText = hoursLeft;
      minutes.innerText = minutesLeft;
      seconds.innerText = secondsLeft;
    }, 900);

  }

  return (
    <section id='productSlider'>
      <div className='saleUpper'>
          <div className='saleInfo'>
            {type === "flashSale" ? <><span className='saleIcon'>
                  <img className='svgLarge' src={SaleIcon} />
              </span>
              <h3>Flash Sale!</h3>
              <span className='saleTimer'>
                <span id='hours'>02</span>
                <div>:</div>
                <span id='minutes'>11</span>
                <div>:</div>
                <span id='seconds'>42</span>
              </span></> : <><h3>Best Sellers</h3></>}
              
          </div>
          <div  id='saleArrows'>
            <span id='leftArrow' onClick={(e) => slideProducts("leftArrow", "left")}  className='saleArrow'>
              <div className='arrow toLeft'>
                <div></div>
                <span></span>
                <span></span>
              </div>
            </span>
            <span id='rightArrow' onClick={() => slideProducts("rightArrow", "right")} className='saleArrow available'>
              <div className='arrow toRight'>
                <div></div>
                <span></span>
                <span></span>
              </div>
            </span>
          </div>
      </div>
      <div id='saleProducts'>
        {type === "flashSale" ? <>
        {products && products.map((product, index) => {
          return (
            <ProductMicro key={index} product={product}/>
          )
        })
        }
        </> : <>
        123
        </>
        }
      </div>
    </section>
  )
}

export default ProductsSlider