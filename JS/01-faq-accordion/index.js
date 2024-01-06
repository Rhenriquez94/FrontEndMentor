const items = document.querySelectorAll('.item');

items.forEach(item => {
    const header = item.querySelector('.item-header');

    header.addEventListener('click', () => {
       
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.item-content').style.display = 'none';
            }
        });
        const content = item.querySelector('.item-content');
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
