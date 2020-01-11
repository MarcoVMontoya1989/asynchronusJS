// function getRecipeForFood() {
//     setTimeout(() => {
//         const recipeID = [123,345,567,878];
//         console.log(recipeID);
//
//         setTimeout((id) => {
//             const recipe = {
//                 title: 'Kimchi Broth',
//                 publisher: 'Kim Jae Suk'
//             };
//             console.log(`${id}: Recipe Title: ${recipe.title} Author: ${recipe.publisher}`);
//             setTimeout(publisher => {
//                 const recipe2 = {
//                     title: 'italian pizza',
//                     publisher: 'marco',
//                 };
//                 console.log(`${publisher}: ${recipe2.title} name: ${recipe2.publisher}`)
//
//             }, 3000, recipe.publisher)
//
//         }, 3000, recipeID[2]);
//
//     }, 2000)
// }
//
// getRecipeForFood();

// const getIDs = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        resolve([123,345,567,878]);
//    }, 1500);
// });
//
// const getRecipe = recID => {
//   return new Promise((resolve, reject) => {
//      setTimeout(ID => {
//          const recipe = {
//              title: 'Kimchi Broth',
//              publisher: 'Kim Jae Suk'
//          };
//          resolve(`${ID}: Recipe Title: ${recipe.title} Author: ${recipe.publisher}`);
//      }, 1500, recID);
//   });
// };
//
// const getRelated = publisher => {
//   return new Promise((resolve, reject) => {
//      setTimeout(pub => {
//          const recipe2 = {
//              title: 'italian pizza',
//              publisher: 'marco',
//          };
//          resolve(`${pub}: ${recipe2.title} name: ${recipe2.publisher}`)
//      }, 1400, publisher);
//   });
// };
//
// getIDs.then(el => {
//     console.log(el);
//     return getRecipe(el[2]);
// })
//     .then(recipe => {
//         console.log(recipe);
//         return getRelated('test');
//     })
//     .then(publisher => {
//         console.log(publisher);
//     })
//     .catch(err => {
//     console.log(err);
// });


// ------------------------------------------------------
// repaso promises

const firstPromise = new Promise((res, rej) => {
   setTimeout(() => {
       res([1,2,3,4,5]);
   }, 1500);
});

const secondPromise = title => {
    return new Promise((res, rej) => {
        setTimeout(tit => {
            let book = {
                title: 'lord of the rings',
                author: 'J.R.R Rowling'
            };
            res(`${tit} the book is: ${book.title} and the author is: ${book.author}`);
        }, 1500, title);
    });
};

const thirdPromise = publisher => {
  return new Promise((res, rej) => {
     setTimeout(pub => {
         let magazine = {
             company: 'bandai',
             ceo: 'Hiroto'
         };
         res(`${pub}, company: ${magazine.company}, CEO: ${magazine.ceo}`);
     }, 1500, publisher);
  });
};

firstPromise
    .then(res => {
        console.log(res);
        return secondPromise(res[2]);
    })
    .then(title => {
        console.log(title);
        return thirdPromise('adventure');
    })
    .then(magazine => {
        console.log(magazine);
    })
.catch(error => {
    console.log(error);
});