import React, { useEffect, useState } from 'react'
import SearchForm from "./SearchForm"
import axios from "axios"

const api_key = "d22e7068a02642e7bdecbb8bb27a05c3";
//const api_link = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key="+api_key;

function NewsFeeds() {
    const [data, setarticles] = useState([])

    useState(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=d22e7068a02642e7bdecbb8bb27a05c3" + api_key)
            .then((info => setarticles(info.data)))
    }, [])

    return (
        <>
            <div>
                <SearchForm />
            </div>
            <div className="container">
                <div className="row">
                    {
                        data.map((value) => {
                            return (
                                <div className="col-2">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={value.urlToImage} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NewsFeeds
