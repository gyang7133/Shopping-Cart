$(document).ready(function () {

// Creating Product List Array
const productList = [
    {
       category: 'Bath Bombs',
       name: 'Twilight',
       img: src= './assets/images/Twilight.jpg'
    },

    {
        category: 'Bath Bombs',
        name: 'Cotton Candy',
        img: src= './assets/images/Cotton-Candy.jpg'
     },

     {
        category: 'Bath Bombs',
        name: 'Luxury Lush',
        img: src= './assets/images/Luxury-Lush.jpg'
     },

     {
        category: 'Bath Bombs',
        name: 'Snow Fairy',
        img: src= './assets/images/Snow-Fairy.jpg'
     },

     {
        category: 'Bubble Bars',
        name: 'Lemon Paint Brush',
        img: src= './assets/images/Lemon-Brush-BB.jpg'
     },

     {
        category: 'Bubble Bars',
        name: 'Magic Wand',
        img: src= './assets/images/Magic-Wand-BB.jpg'
     },

     {
        category: 'Bubble Bars',
        name: 'Pink Flower',
        img: src= './assets/images/Pink-Flower-BB.jpg'
     },

     {
        category: 'Bubble Bars',
        name: 'Sunny Side',
        img: src= './assets/images/Sunny-Side-BB.jpg'
     },

     {
        category: 'Soap ',
        name: 'Bohemian',
        img: src= './assets/images/Bohemian-SP.jpg'
     },

     {
        category: 'Soap ',
        name: 'Christmas Citrus',
        img: src= './assets/images/Christmas-Citrus-SP.jpg'
     },

     {
        category: 'Soap ',
        name: 'Merry Berry',
        img: src= './assets/images/Merry-Berry-SP.jpg'
     },

     {
        category: 'Soap ',
        name: 'Midnight',
        img: src= './assets/images/Midnight-SP.jpg'
     },
]

// Sidebar Collaspe Functions


    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    

    //Declare Category Array
    var categories = [];

    //Render Productlist on the page
    const render = function () {

        for (let i = 0; i < productList.length; i++) {

            const itemBtn = $(`<img class=" p-3 m-2 btn btn-warning product ${productList[i].category} item-${i}">`);
            itemBtn.attr('item-name', productList[i].name);
            itemBtn.text(productList[i].name);
            itemBtn.attr('src', productList[i].img);
            $('#items').append(itemBtn);
            $(`.item-${i}`).on('click', function () {
                dupeFind(productList[i].img, i);
            });

        }
    }
    render(); 

    //Create Category Filter

    //

});