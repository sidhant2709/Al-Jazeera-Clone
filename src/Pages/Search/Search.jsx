// import React,{useState,useEffect} from 'react';
// import { useParams } from 'react-router';
// import SearchCard from './SearchCard';
// import styles from './Styles/Search.module.css';
// import getNewsData from './Utilities/Utilities';
// import Paginate from './Paginate';


// const Search = () => {
//     const { title } = useParams();
//     const [page, setPage] = useState(0);
//     const [newsData, setNewsData] = useState([]);
//     const [response, setResponse] = useState([]);
//     const handlePage = (index) => {
//         setPage(index);
//     }
//     const getData = () => {
//         getNewsData(title)
//             .then((res) => {
//                 console.log(res.data);
//                 const { data } = res.data;
//                 let dataMedaia = Paginate(data);
//                 console.log(dataMedaia);
//                 setNewsData(dataMedaia[0]);
//                 setResponse(dataMedaia);
//             })
//     }
//     useEffect(() => {
//         getData();        
//     }, [title])

//     useEffect(() => {
//         let pagedata = response[page];
//         setNewsData(pagedata)
//     },[page])

//     console.log(response);
//     console.log(newsData);
//     return (
//         <>  
//             <div className={styles.cards}>
//                 <div className={styles.title}><h4>Search Result for {title}</h4></div>
//                 {
//                     newsData?.map((item, i) => {
//                         return (
//                             <SearchCard key={i} {...item}/>
//                         )
//                     })
//                 }
//             </div>
//             <div className={styles.btnContainer}>
//                 {
//                     response.map((item,index) => {
//                         return (
//                             <button key={index} className={index === page ? styles.pageBtn : null} onClick={()=>handlePage(index)}>{index+1}</button>
//                         )
//                     })
//                 }
//             </div>
//         </>
//         )
// }   

// export default Search;


// import React,{useState,useEffect} from 'react';
// import { useParams } from 'react-router';
// import SearchCard from './SearchCard';
// import styles from './Styles/Search.module.css';
// import getNewsData from './Utilities/Utilities';
// import Paginate from './Paginate';


// const Search = () => {
//     const { title } = useParams();
//     const [page, setPage] = useState(0);
//     const [newsData, setNewsData] = useState([]);
//     const [response, setResponse] = useState([]);
//     const handlePage = (index) => {
//         setPage(index);
//     }
//     const getData = () => {
//         getNewsData(title)
//             .then((res) => {
//                 console.log(res.data.articles);
//                 let dataMedaia = Paginate(res.data.articles);
//                 console.log(dataMedaia);
//                 setNewsData(dataMedaia[0]);
//                 setResponse(dataMedaia);
//             })
//     }
//     useEffect(() => {
//         getData();        
//     }, [title])

//     useEffect(() => {
//         let pagedata = response[page];
//         setNewsData(pagedata)
//     },[page])

//     console.log(response);
//     console.log(newsData);
//     return (
//         <>  
//             <div className={styles.cards}>
//                 <div className={styles.title}><h4>Search Result for {title}</h4></div>
//                 {
//                     newsData?.map((item, i) => {
//                         return (
//                             <SearchCard key={i} {...item}/>
//                         )
//                     })
//                 }
//             </div>
//             <div className={styles.btnContainer}>
//                 {
//                     response.map((item,index) => {
//                         return (
//                             <button key={index} className={index === page ? styles.pageBtn : null} onClick={()=>handlePage(index)}>{index+1}</button>
//                         )
//                     })
//                 }
//             </div>
//         </>
//         )
// }   

// export default Search;




import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import SearchCard from './SearchCard';
import styles from './Styles/Search.module.css';
import getNewsData from './Utilities/Utilities';
import Paginate from './Paginate';
import Loader from 'react-loader-spinner';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';


const Search = () => {
    const { title } = useParams();
    const [page, setPage] = useState(0);
    const [newsData, setNewsData] = useState([]);
    const [response, setResponse] = useState([]);
    const [isLoading, setLoading] = useState(false)


    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = response.length-1;
            }
            return prevPage
        })
    }
    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > response.length - 1) {
                nextPage = 0;
            }
            return nextPage
        })
    }
    const handlePage = (index) => {
        setPage(index);
    }
    const getData = () => {
        setLoading(true)
        getNewsData(title)
            .then((res) => {
                console.log(res.data);
                let dataNewsApi = Paginate(res.data.articles);
                console.log(dataNewsApi);
                setLoading(false)
                setNewsData(dataNewsApi[0]);
                setResponse(dataNewsApi);
            })
    }
    useEffect(() => {
        getData();        
    }, [title])

    useEffect(() => {
        let pagedata = response[page];
        setNewsData(pagedata)
    },[page])

    console.log(response);
    console.log(newsData);
    return (
        <>  
        {isLoading && <Loader type="Grid"
        color="#eb7e20"
        height={600}
        width={300}
        className = {styles.loader__show}
        timeout={3000} />}
            {!isLoading && <div className={styles.cards}>
                <div className={styles.title}><p>Search Result for:</p><span>{title.toUpperCase()}</span></div>
                {
                    newsData?.map((item, i) => {
                        return (
                            <SearchCard key={i} {...item}/>
                        )
                    })
                }
            </div>}
            {!isLoading &&  <div className={styles.btnContainer}>
                <button className={styles.prevBtn} onClick={prevPage}>&#60; Previous</button>
                {
                    response.map((item,index) => {
                        return (
                            <button key={index} className={index === page ? styles.activeBtn : styles.pageBtn} onClick={()=>handlePage(index)}>{index+1}</button>
                        )
                    })
                }
                <button className={styles.nextBtn} onClick={nextPage}>Next &#62;</button>
            </div>}
            <FooterContainer/>
        </>
        )
}   

export default Search;

