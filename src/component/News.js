import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  //   api = {
  //     apiKey: "",
  //   };
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category:"general",
  }
  static propTypes ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string,
  }
  constructor() {
    super();
    // console.log("Hey i m am constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1, // current state
    };
  }
   async updateNews () {  
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=679831ceab844c6292b75dff68ee72fb&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=679831ceab844c6292b75dff68ee72fb&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    console.log("previous button");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=679831ceab844c6292b75dff68ee72fb&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("next button");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=679831ceab844c6292b75dff68ee72fb&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center fw-bold">NewsJocky - Top-headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={
                    element.title ? element.title.slice(0,29): ""
                  }
                  source={
                    element.source.name ? element.source.name : "Unknown" 
                  }
                  author={
                    element.author ? element.author : "Unknown"
                  }
                  publishedAt={
                    element.publishedAt
                  }
                  // we can remove above and below comment to slice the title and description upto the characters we want
                  description={
                    element.description ? element.description.slice(0,88): ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}/>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            {" "}
            &#x2190; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}
            className="btn btn-dark"
            onClick={this.handleNextClick}>
            Next &#x2192;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
