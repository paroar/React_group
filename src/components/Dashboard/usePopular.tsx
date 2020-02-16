import React, { useState, useContext, useEffect } from 'react';
import { urls } from '../../utils/urls';
import { AuthContext } from '../../contexts/Auth';
import { firestore } from 'firebase';

export type Movie = {
    poster_path: string;
    title: string;
    id: string;
    release_date: string;
};
  
// toggleWatched = () => {
//     const watchedPath = `users/${name}/watched`;

//     setWatched(!watched);
//     if (watched === false) {
//         firestore().collection(watchedPath).add({
//             movie
//         })
//     } else {
//         firestore().collection(watchedPath).doc(movie.id).delete()
//     }
// }
const Popular = () => {
    const [popular, setPopular] = useState([] as Movie[]);
    const [searchVersion, setSearchVersion] = useState(0);
    const { currentUser } = useContext(AuthContext);
    const name = currentUser.uid;
    const newSearchVersion = searchVersion + 1;
    const liked = `users/${name}/liked`;
    
useEffect(() => {
    
    firebase
      .firestore()
      .collection(`users/${name}/lists/${name}${collection-name}`)
      .add({
        movie
      })
  })

    const url =
        urls.domain +
        "search/movie" +
        urls.apikey +
        "&sort_by=popularity.desc&language=en-US";
        setSearchVersion(newSearchVersion);
        fetch(url)
            .then(response => response.json())
            .then(movies => {
            if (searchVersion === newSearchVersion) {
                setPopular(movies.results);
            }
        })
    return { popular };
}


export default Popular;

