const searchBook = () => {
    const searchField = document.getElementById('search-field');
    document.getElementById('error').textContent = '';
    const searchText = searchField.value;
    /* console.log(url) */

    if (searchField.value === '') {
        document.getElementById('error').innerHTML = `
        <h3 class="text-danger text-center">Please Type The Book Name!!</h3>
        `;
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data))
    }
    searchField.value = ''

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result')
    /* console.log(data.numFound) */
    const books = data.docs;
    searchResult.innerHTML = '';
    const foundItems = document.getElementById('found-iems')
    foundItems.innerHTML = `
    <h3 class="text-center text-success my-5">Found Result: ${data.numFound}</h3>
    
    `

    const slice = books.slice(0, 20);
    slice.forEach(book => {
        // console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')

        div.innerHTML = `
                <div class="card h-50">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-.primary ">Book Name: ${book.title}</h5>
                        <hr>
                        <h5 class="card-title text-warning ">Authore Name: ${book.author_name}</h5>
                        <hr>
                        <h5 class="card-title text-success">Publisher Name: ${book.publisher}</h5>
                        <hr>
                        <h5 class="card-title text-danger ">Published First Date: ${book.first_publish_year}<h5>

                    </div>
                </div>
        </div>

        `;
        searchResult.appendChild(div)

    });

}







