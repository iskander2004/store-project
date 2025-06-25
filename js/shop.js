const row = document.querySelector('.row');
const resetbtn = document.querySelector('#reset');
const searchbtn = document.querySelector('#search');
const searchproduct = document.querySelector('#searchus')
function getproductOnload(){
    let url='https://dummyjson.com/products';
    let option={
        method:'GET',
        Headers:{
            'content-type':'application/json'
        }
    };
    fetch(url,option)
    .then(reponse =>{
        if(!reponse.ok)
            throw new Error("error while fetching")
        return reponse.json();
    }).then(data =>{
        row.innerHTML='';
        data.products.forEach(product => {
        let codeProductCard=`
        <div class="card mx-auto mt-5  " style="width: 18rem;">
            <img src="${product.images[0]}" class="card-img-top" alt="Post ${product.id}">
                <div class="card-body">
                    <h5 class="card-title">product ${product.id}</h5>
                    <p class="card-text"> ${product.title}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${product.category} </li>
                    <li class="list-group-item">${product.price} </li>
                    <li class="list-group-item">${product.availabilityStatus}</li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary">pay Now</button>
                    <button type="button" class="btn btn-primary">Add to card</button>  
                </div>
        </div>
        `;
        row.innerHTML+=codeProductCard;   
        });
    }).catch(error =>{
        console.log("error while fetching data:",error);
    });
}
function searchProduct(){
    let title=searchproduct.value;
    let url=`https://dummyjson.com/products/search?q=${title}`;

    let option={
        method:'GET',
        Headers:{
            'content-type':'application/json'
        }
    };
    fetch(url,option)
    .then(reponse =>{
        if(!reponse.ok){
            console.error("leena");
            throw new Error("error while fetching");
        }
        return reponse.json();
    }).then(data =>{
        row.innerHTML='';
        data.products.forEach(product=>{
            const codeProductCard=`
                <div class="card mx-auto mt-5  " style="width: 18rem;">
                    <img src="${product.images[0]}" class="card-img-top" alt="Post ${product.id}">
                        <div class="card-body">
                            <h5 class="card-title">product ${product.id}</h5>
                            <p class="card-text"> ${product.title}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${product.category} </li>
                            <li class="list-group-item">${product.price} </li>
                            <li class="list-group-item">${product.availabilityStatus}</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-primary">pay Now</button>
                            <button type="button" class="btn btn-primary">Add to card</button>  
                        </div>
                </div>
            `;
            row.innerHTML+=codeProductCard;   
        });
    }).catch(error =>{
        console.log("error while fetching data:", error);
    });

}
document.addEventListener('DOMContentLoaded',getproductOnload)
resetbtn.addEventListener('click', function(){ 
    row.innerHTML='';
    getproductOnload();
});
searchbtn.addEventListener('click',searchProduct)



