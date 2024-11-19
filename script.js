let counter = 1; 

const apiUrl = `https://fakestoreapi.com/products/${counter}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            document.getElementById('productName').textContent = data.title;
            document.getElementById('productPrice').textContent = `$${data.price}`;
           
            counter++;
        })
        .catch(() => {
          
            document.getElementById('productName').textContent = "მონაცემები არ მოიძებნა";
            document.getElementById('productPrice').textContent = "N/A";
        });
