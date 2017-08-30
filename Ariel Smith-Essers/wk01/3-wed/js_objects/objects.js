// Recipe Card
var favRecipe = {
  title: 'Nachos',
  serves: 3,
  ingredients: ['beans', 'cheese', 'corn chips', 'sour cream']
}
console.log(favRecipe.title);
console.log("Serves: " + favRecipe.serves);
console.log("Ingredients: ");
for (var i = 0; i < favRecipe.ingredients.length; i++) {
  console.log(favRecipe.ingredients[i]);
}
// can also use join to display the ingredients:
console.log("Ingredients: \n" + favRecipe.ingredients.join('\n'));

//Book sorting
var bookShelf = [
  {
    title: 'Sabriel',
    author: 'Garth Nix',
    alreadyRead: true
  },
  {
    title: 'Emma',
    author: 'Jane Austen',
    alreadyRead: false
  },
  {
    title: 'Oliver Twist',
    author: 'Charles Dickens',
    alreadyRead: true
  },
  {
    title: 'North and South',
    author: 'Elizabeth Gaskell',
    alreadyRead: false
  },
  {
    title: 'Goldenhand',
    author: 'Garth Nix',
    alreadyRead: false
  }
];

for (var i = 0; i < bookShelf.length; i++) {
  console.log(bookShelf[i].title + " by " + bookShelf[i].author);
  if (bookShelf[i].alreadyRead) {
    console.log("You already read " + bookShelf[i].title + " by " + bookShelf[i].author);
  }else {
    console.log("You still need to read " + bookShelf[i].title + " by " + bookShelf[i].author)
  }
}

// Movie Information
var favMovie = {
  title: 'The Hunger Games',
  duration: 144,
  stars: ['Jennifer Lawrence', 'Woody Harrelson', 'Josh Hutcherson', 'Elizabeth Banks']
};

function movieInfo(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes. Starring: " + movie.stars.join(", ") + ".");
}

movieInfo(favMovie);
