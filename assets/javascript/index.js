$(function()
{
    renderProducts();
    renderSC();

});

// Creating Product List Array
const productList = [
    {
       id:  '1',
       category: 'BathBombs',
       name: 'Twilight',
       img: src= 'Twilight.jpg'
    },

    {
        id: '2',
        category: 'BathBombs',
        name: 'Cotton Candy',
        img: src= 'stars.jpg'
     },

     {
        id: '3',
        category: 'BathBombs',
        name: 'Luxury Lush',
        img: src= 'Luxury-Lush.jpg'
     },

     {
        id: '4',
        category: 'BathBombs',
        name: 'Snow Fairy',
        img: src= 'Snow-Fairy.jpg'
     },

     {
        id: '5',
        category: 'BubbleBars',
        name: 'Lemon Paint Brush',
        img: src= 'Lemon-Brush-BB.jpg'
     },

     {
        id: '6',
        category: 'BubbleBars',
        name: 'Magic Wand',
        img: src= 'Magic-Wand-BB.jpg'
     },

     {
        id: '7',
        category: 'BubbleBars',
        name: 'Pink Flower',
        img: src= 'Pink-Flower-BB.jpg'
     },

     {
        id: '8',
        category: 'BubbleBars',
        name: 'Sunny Side',
        img: src= 'Sunny-Side-BB.jpg'
     },

     {
        id: '9',
        category: 'Soap ',
        name: 'Bohemian',
        img: src= 'Bohemian-SP.jpg'
     },

     {
        id: '10',
        category: 'Soap ',
        name: 'Christmas Citrus',
        img: src= 'Christmas-Citrus-SP.jpg'
     },

     {
        id: '11',
        category: 'Soap ',
        name: 'Merry Berry',
        img: src= 'Merry-Berry-SP.jpg'
     },

     {
        id: '12',
        category: 'Soap ',
        name: 'Midnight',
        img: src= 'Midnight-SP.jpg'
     },
]
const arraySC = [];

   // Create item cards from Product List
   const productCard = function(id, category, name, image) 
   {
       return `
       
       <div class= "col-sm-12 col-md-6 col-lg-4  border border-dark ">
         <div class "card mb-6 p-5">
            <img class ="card-top justify-content-center" src="./assets/images/${image}" alt="ProductCard">
            <div class="card-body">
                <h5 class="card-category d-flex justify-content-center">${category}</h5>
                <h3 class="card-title d-flex justify-content-center">${name}</h5>
            </div>
            <div class="card-footer">
                  <button type="button" class="btn btn-primary" item-id="${id}">Add to Cart</button>
            </div>

         </div>
       </div>
        `  
   }


    //Render Category of products on the page

    const renderProducts = function () 
    {

        for (let i = 0; i < productList.length; i++)
         {

            let prodID = productList[i].id;
            let prodCategory = productList[i].category;
            let prodName = productList[i].name;
            let prodImg = productList[i].img;
            $('#productList').append(productCard(prodID, prodCategory, prodName, prodImg));

        } 
    }
    
    //Render Shopping Cart 
    const renderSC = function(array)
    {
        if(!array)
        {
            array = arraySC;
        }
    
        $('#cartList').empty();
        if(!array.length)
        {
            $('#cartList').html(`<span class="font-italic">No items in the cart.</span>`);
        }
        else
        {
            for(let i = 0; i < array.length; i++) 
            {
              $('#cartList').append(`<button class="btn btn-outline-primary m-1" data-item-id="${array[i].id}">${array[i].name}</buttion>`);
            }
        }
    }

   //Filter Products
   for (let i = 0; i < productList.length; i++)
   {
      $(`#${productList[i].category}`).on('click', function () 
      {
          $('#productList').hide();
          $(`.${productList[i].category}`).show();
      });
  }

  //Filter All: All Button shows all the categories
  $('#all').on('click', function ()
   {
      $('#productList').show();
   }); 


  //Clear Shopping Cart
  const clearCart = function ()
  {
      $('#cart').empty();
  }
  $('#clear').on('click', clear);

