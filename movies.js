const Movies = (function () {
    const _movies = {
        "status": "OK",
        "results": [
            {
                "rank": 1,
                "title": "The Shawshank Redemption",
                "year": 1994,
                "rating": "9.2",
                "imdb_link": "https://www.imdb.com/title/tt0111161/"
            },
            {
                "rank": 2,
                "title": "The Godfather",
                "year": 1972,
                "rating": "9.2",
                "imdb_link": "https://www.imdb.com/title/tt0068646/"
            },
            {
                "rank": 3,
                "title": "The Godfather: Part II",
                "year": 1974,
                "rating": "9.0",
                "imdb_link": "https://www.imdb.com/title/tt0071562/"
            }
        ]
    };

    const _moviesResults = _movies.results;

    const getMovieRanks = function() {
        return _moviesResults.map(m => console.log('movie ranks:', m.rank));
    };

    const getMovieTitles = function() {
        return _moviesResults.map(m => console.log('movie titles:', m.title));
    };

    const getMovieYears = function() {
        return _moviesResults.map(m => console.log('movie years:', m.year));
    };

    const getAmountOfMovies = function() {
        const _moviesAmount = _moviesResults.length;
        console.log('movie amounts:', _moviesAmount);
        return _moviesAmount;
    };

    const getFullData = function() {
        return _moviesResults.map(m => {
            console.log(`At number ${m.rank}, the movie ${m.title} with a tremendous score of ${m.rating}!`);
        });
    };

    return {
        ranks: getMovieRanks,
        titles: getMovieTitles,
        amount: getAmountOfMovies,
        years: getMovieYears,
        allData: getFullData
    }
})();

console.log('---------- Movies Module starts here ---------- ');
Movies.ranks();
Movies.titles();
Movies.amount();
Movies.years();
Movies.allData();
console.log('---------- Movies Module ends here ---------- ');
