fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Данные загружены, можно создать карточки продуктов на HTML
    });
