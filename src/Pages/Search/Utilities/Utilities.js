// import axios from "axios";
// const getNewsData = (searchInput) => {
//     const config = {
//         method: "get",
//         url: "http://api.mediastack.com/v1/news",
//         headers: {
//             Accept: "application/json"
//         },
//         params: {
//             access_key:"76bd20b9900e6b5c12e1b124c6cc6e8a",
//             keywords: searchInput,
//             languages: "en"
//         }
//     };
//     return axios(config);
// }
// export default getNewsData;


// import axios from "axios";
// const getNewsData = (searchInput) => {
//     const config = {
//         method: "get",
//         url: " https://gnews.io/api/v4/search",
//         headers: {
//             Accept: "application/json"
//         },
//         params: {
//             token:"e203b5fe7b34ec7db9696572eb3df651",
//             q: searchInput,
//             lang: "en"
//         }
//     };
//     return axios(config);
// }

// export default getNewsData;


import axios from "axios";
const getNewsData = (searchInput) => {
    const config = {
        method: "get",
        url: "https://newsapi.org/v2/everything",
        headers: {
            Accept: "application/json"
        },
        params: {
            apiKey:"3f861290131f48c6abdd7d2c04b585af",
            q: searchInput,
            pageSize:100
        }
    };
    return axios(config);
}
export default getNewsData;

