const code_lang = ["js", "cpp", "java", "python", "ruby", "swift"];

const values = code_lang.forEach(item => {
    return item
})

console.log(values)
/*
> Here we can see that forEach loop doesn't return any thing implicitily
> However we could do it manually
>Task -> Return all those code Languages who start with character 'j'.
*/

const arr = []
code_lang.forEach(item => {
    if (item[0] === 'j') arr.push(item)
})
console.log(arr)

//But there is a preffered alternative
//Filter Operation -> Returns the elements of an array, that meet the condition specified in a callback function.

const req_arr_1 = code_lang.filter(val => {
    return (val[0] === 'j');
})
console.log(req_arr_1)

const req_arr_2 = code_lang.filter(val => (val[0] === 'j'))
console.log(req_arr_2)

//Task -> From an array of numbers return all those numbers which don't lie in the given range i.e. (0 <= number <= 10)

const myNums = [-4, 5, 0, 1, 2, 7, 9, 6, 100, 23, 17]

const req_nums_1 = myNums.filter(val => val < 0 || val > 10)
console.log(req_nums_1)

const req_nums_2 = myNums.filter(function (val){
    return (val < 0 || val > 10)
})

console.log(req_nums_2)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//Task-1 => Filter all those books, who have genre as History
const req_books_1 = books.filter(book => book["genre"] === "History")
console.log(req_books_1)

//Task-2 => Filter all those books, who have publishing on or after 1995, and have a genre as History
const req_books_2 = books.filter(book => {return book["publish"] >= 1995 && book["genre"] === "History"})
console.log(req_books_2)

