const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([123,345,567,878]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title: 'Kimchi Broth',
                publisher: 'Kim Jae Suk'
            };
            resolve(`${ID}: Recipe Title: ${recipe.title} Author: ${recipe.publisher}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe2 = {
                title: 'italian pizza',
                publisher: 'marco',
            };
            resolve(`${pub}: ${recipe2.title} name: ${recipe2.publisher}`)
        }, 1400, publisher);
    });
};

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
//         console.log(err);
//     });

async function getRecipesAwaitAsync() {
    const IDs = await getIDs;
    console.log(getIDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const publisher = await getRelated('Marco');
    console.log(publisher);
}

getRecipesAwaitAsync();


//----------------------------------------------------

//example of promise

const firstPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve([1,2,3,4,5]);
   }, 1500)
});

const secondPromise = book => {
    return new Promise((resolve, reject) => {
        setTimeout(bk => {
            const books = {
              title: 'Blame!',
              author: 'Nihei Tsutomo'
            };

            resolve(`${bk}: ${books.title} bio: ${books.author}`);
        }, 1500, book)
    });
};

async function getBooksWithPromise() {
    const IDs = await firstPromise;
    console.log(IDs);

    const book = await secondPromise(IDs[2]);
    console.log(book);

    return book;
}

getBooksWithPromise().then(r => {
    console.log(r);
});

