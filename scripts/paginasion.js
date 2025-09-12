const newTemplate = document.getElementById('new-template').content;
const newsContainer = document.querySelector('.news-container');
const loadPosts = async () => {
    const res = await fetch('.'); 
    const posts = await res.json();
    return posts;
}
posts = [{
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
    {
        name: 'John Doe',
        date: '19 Jan 2022',
        newHeader: 'A small business is only as good as its tools and it is totally true.',
        newBody: "We've all experienced the chaos of multiple spreadsheets, tracking and insight tools, and scrambling for the right data at the right time.",
        newButton: 'Подробнее',
    },
]

const renderPosts = (posts) => {
    if (!posts) return;
    newsContainer.innerHTML = ''; // Clear existing posts
    posts.forEach(el => {
        const postCont = newTemplate.cloneNode(true);
        postCont.querySelector('.name').textContent = el.name;
        postCont.querySelector('.date').textContent = el.date;
        postCont.querySelector('.new-header').textContent = el.newHeader;
        postCont.querySelector('.new-body').textContent = el.newBody;
        postCont.querySelector('.new-button').textContent = el.newButton;
        newsContainer.appendChild(postCont);
    });
}

let currentPage = 1;
const countPostsOnPage = 6;

const renderPage = (page, posts) => {
    const start = (page - 1) * countPostsOnPage;
    const end = start + countPostsOnPage;
    const paginatedPosts = posts.slice(start, end);
    renderPosts(paginatedPosts);
}

const renderPagination = (posts) => {
    const pageCount = Math.ceil(posts.length / countPostsOnPage);
    const paginationDiv = document.querySelector('.news-nav')
    paginationDiv.innerHTML = ''; 

    const prevArrow = document.createElement('span');
    prevArrow.innerHTML = `<img style="transform:rotate(180deg)" src="./assets/icons/arr.svg"/>`;
    prevArrow.classList.add('pagination-arrow');
    if (currentPage === 1) {
        prevArrow.classList.add('disabled');
    }
    prevArrow.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage, posts);
            renderPagination(posts);
        }
    });
    paginationDiv.appendChild(prevArrow);

    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('span');
        const width = window.innerWidth;

        const startPage = document.createElement('span');
        startPage.textContent = '1...';
        startPage.classList.add('page-item');

        if(i - 2 < currentPage && i + 2 > currentPage) {
            pageItem.textContent = i;
            pageItem.classList.add('page-item');
        }
        if (i === currentPage) {
            pageItem.classList.add('active');
        }
        pageItem.addEventListener('click', () => {
            currentPage = i;
            renderPage(currentPage, posts);
            renderPagination(posts);
        });
        paginationDiv.appendChild(pageItem);
    }

    const nextArrow = document.createElement('span');
    nextArrow.innerHTML = `<img src="./assets/icons/arr.svg"/>`;
    nextArrow.classList.add('pagination-arrow');
    if (currentPage === pageCount) {
        nextArrow.classList.add('disabled');
    }
    nextArrow.addEventListener('click', () => {
        if (currentPage < pageCount) {
            currentPage++;
            renderPage(currentPage, posts);
            renderPagination(posts);
        }
    });
    paginationDiv.appendChild(nextArrow);
}

// Example usage:
renderPage(currentPage, posts);
renderPagination(posts);