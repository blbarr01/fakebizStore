

$(document).ready(()=>{

fetch('https://dummyjson.com/products') //return http request object
.then(res => res.json())  // convert request to json obj
.then(data => data.products) // return an array of product objects 
.then((products)=>{loadContainer(products)})
.catch((error)=> console.error(error)); 

});



function loadContainer(products){
    // the global index helps me parse throught the array of products accross calls 
    let gi = 0; 


    // grab all our containers
    //bad
    /*     
    let sc = Object.values($("col-2"));
    console.log(sc); 
    */
     
    // good 
    let singleCols = $.makeArray($(".col-1"));
    let doubleCols = $.makeArray($(".col-2"));
    let trippleCols = $.makeArray($(".col-3"));
    let quatrainCols = $.makeArray($(".col-4"));
    let bigSquare = $.makeArray($(".col-2x3"));
    let allCols = [...singleCols, ...doubleCols, ...trippleCols, ...quatrainCols];
    
    console.log(allCols);

    const renderProducts = (container) =>{
                container.forEach(element => {
                  let  content = `
                    <div class="product-card">
                        <img src="${products[gi].images[0]}" alt="${products[gi].title}">
                        <div class="product-details"> 
                            <h3 class="product-name"> ${products[gi].title}:<span>  $${products[gi].price}</span></h3>
                            <p class="product-desc">${products[gi].description}</p>
                        </div>   
                    </div>   
                    `;
                    gi++; 
                    $(element).append(content);
                });
    }

    const renderBig = (element) =>{
        let content = `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${products[gi].images[0]}" alt="${products[gi].title}">
                <img src="${products[gi].images[2]}" alt="${products[gi].title}">
            </div>
            <div class="product-details"> 
                <h3 class="product-name"> ${products[gi].title}:<span>  $${products[gi].price}</span></h3>
                <p class="product-desc">${products[gi].description}</p>
            </div>   
        </div>   
        `;
        gi++;
        $(content).appendTo($(element));
    }

    renderProducts(allCols);
    gi++;
    renderBig(bigSquare);

}