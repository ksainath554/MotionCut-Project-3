const mainImage = document.querySelector('.main-image');
        const thumbnails = document.querySelectorAll('.thumb');
        const addToCartButton = document.querySelector('.add-to-cart');
        
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainImage.src = thumb.src;
            });
        });
        
        addToCartButton.addEventListener('click', () => {
            alert('Product added to cart!');
        });