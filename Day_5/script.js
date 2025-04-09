let Book_Shelf = new Map([ 
    ["Learning Python: Beginner", "python-01"],
    ["Learning Python: Advance", "python-02"],
    ["Learning Python: Expert", "python-03"],
    ["Python tkinter", "python-04"],
    ["Web dev: Python", "python-05"],
    ["Learning C++: Beginner", "c++-01"],
    ["Learning C++: Advance", "c++-02"],
    ["Learning C++: Expert", "c++-03"],
    ["C++ Data Structure & Algorithm", "c++-04"],
    ["C++ OpenGL", "c++-05"],
])

function SearchBook()
{
    let book_val = document.getElementById("Book_Searched").value;

    let book_code = Book_Shelf.get(book_val);

    if(book_code == undefined)
        book_code = "Book Not Found";
    else
        book_code = "Book Code: " + book_code;

    document.getElementById("book-title-label").innerText = book_code;

    return;
}