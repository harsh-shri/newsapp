import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, publishedAt, author, source} = this.props; // destructuring
        return (
            <>
                <div className="card mb-2 shadow" style={{width: "18rem", marginTop: "2rem"}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%",}}>
                    {source}
                </span>
                    <img src={imageUrl ? imageUrl : "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg" } className="card-img-top" alt="..."/>
                    <div className ="card-body">
                    <h5 className ="card-title">{title}...</h5>
                    <p className ="card-text mb-1">{description}...</p>
                    <p className="card-text mb-3"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className ="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
