$(document).ready(function () {

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

// Sidebar Collaspe Functions

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () 
    {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });


   // Create item cards from Product List
   const productCard = function(id, category, name, image) 
   {
       return `
       
       <div class= "col-sm-12 col-md-6 col-lg-4  border border-dark ">
         <div class "card mb-6 p-5">
            <img class ="card-top justify-content-center" src="./assets/images/${image}" alt="Product">
           
           
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

    const renderCategory = function () 
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
    renderCategory(); 

    //Render Shopping Cart 
    const renderShoppingCart = function(itemId)
    {
        clearCart();
        for(let i = 0; i < productList.length; i++)
        {
            if(productList[i].id === itemId)
            {
                const inCartBtn =$('<button>');
                inCartBtn.addClass(`btn btn-outline-success w-100 m-2`);
                inCartBtn.attr('item', itemList[i].item);
                inCartBtn.attr('index', i);
                inCartBtn.text(itemList[i].item);
                $('#cartList').append(inCartBtn);
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






});