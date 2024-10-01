const listOfBooks = [];

function addBook(title, author, year) {
    const book = {
        title: title,
        author: author,
        year: year,
    };
    
    if (book.title != " " && book.author != " " &&  book.year != " ") { 
    listOfBooks.push(book);
    }
    else {
        alert("Некорректные данные");
        console.log("Некорректные данные");
    }
}
addBook(input.title, input.author, input.year);
    
    console.log(listOfBooks);




    const btn = document.querySelector("button.add");
    const input = document.querySelector("input");




    listOfBooks.forEach(book => {
        console.log(`Книга: ${book.title} Автор: ${book.author} Год издания: ${book.year}`);
    const div = document.createElement("div");
    div.className = "book";
    div.textContent = `Книга: ${book.title} Автор: ${book.author} Год издания: ${book.year}`;
    document.body.h2.append(div);
    });

    btn.addEventListener("click", () => {
        const input = document.querySelector("input");
        console.dir(input.value);
        alert(`В input вы написали ${input.value}`);
    });


