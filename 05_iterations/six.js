// const coding = ['js', 'css', 'html','python']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNumes = myNums.filter( (num) => {
// return num > 4
// })
const newNums = [];

// myNums.forEach((num) => {
// if (num > 4) {
// newNums.push(num)
// }
// })

console.log(newNums);

const books = [
  {
    title: "Book one",
    genre: "Fiction",
    author: "Saad",
    pulish: 1961,
    edition: 2004,
  },
  {
    title: "Book two",
    genre: "non-Fiction",
    author: "Saad",
    pulish: 1922,
    edition: 2008,
  },
  {
    title: "Book three",
    genre: "History",
    author: "Saad",
    pulish: 1922,
    edition: 2008,
  },
  {
    title: "Book four",
    genre: "science",
    author: "Saad",
    pulish: 1922,
    edition: 2008,
  },
  {
  title: "Book five",
  genre: "Fiction",
  author: "Saad",
  pulish: 1961,
  edition: 2004,
},
{
  title: "Book six",
  genre: "non-Fiction",
  author: "Saad",
  pulish: 1923,
  edition: 2008,
},
{
  title: "Book seven",
  genre: "non-Fiction",
  author: "Saad",
  pulish: 1922,
  edition: 2008,
},
{
  title: "Book eight",
  genre: "History",
  author: "Saad",
  pulish: 1928,
  edition: 2008,
},

{
  title: "Book nine",
  genre: "Fiction",
  author: "Saad",
  pulish: 1961,
  edition: 2004,
}
]

let userBook = books.filter( (bk) => bk.genre === "History")
userBook = books.filter( (bk) => { return bk.pulish >= 1922 && bk.genre === "History"})

console.log(userBook)