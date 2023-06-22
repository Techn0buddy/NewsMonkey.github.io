import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  articles = [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Daniel Golson",
      title: "Rivian R1S review: king of the mountain",
      description:
        "Rivian’s R1S electric SUV is one of the most well-designed and well-engineered EVs on the market. The drive quality is impressive, even in the thick snow, and the technology is impeccable.",
      url: "https://www.theverge.com/23688504/rivian-r1s-review-ev-photos-specs-price",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/queMnrIcfFscUqy2kGBdZfKEybM=/0x0:2048x1365/1200x628/filters:focal(1024x683:1025x684)/cdn.vox-cdn.com/uploads/chorus_asset/file/24585480/236609_Rivian_R1S_review_DGolson_001.jpg",
      publishedAt: "2023-04-22T12:00:00Z",
      content:
        "The biggest compliment I can give to the Rivian R1S is that it makes life easy. Exemplified by a recent trip I took to Big Bear with friends prior to the record-breaking snowstorms that slammed South… [+12635 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "newsfeedback@fool.com (Justin Pope)",
      title: "Could Hims & Hers Health Stock Help You Become a Millionaire?",
      description: "Share prices are up more than 300% from their 52-week low.",
      url: "https://www.fool.com/investing/2023/04/22/could-hims-hers-health-stock-help-be-millionaire/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/728761/vitamins-holistic-medicine-health.jpg",
      publishedAt: "2023-04-22T11:50:00Z",
      content:
        "Finding an emerging industry leader in its early stages can generate life-changing wealth. What wouldn't investors do to go back in time and buy shares of Tesla or Amazon stock before they became the… [+3926 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "yahoo.com",
      title:
        "Tesla's California market share tumbles despite aggressive price cuts",
      description:
        "Tesla's market share in its key California market tumbled in the first quarter of the year despite aggressive price cuts as rivals stepped up, data showed on Friday. Tesla Inc controlled 59.6% of the battery electric market in California from January to March…",
      url: "https://biztoc.com/x/37ab38cb5ecdd1c8",
      urlToImage: "https://c.biztoc.com/p/37ab38cb5ecdd1c8/og.webp",
      publishedAt: "2023-04-22T11:36:05Z",
      content:
        "Tesla's market share in its key California market tumbled in the first quarter of the year despite aggressive price cuts as rivals stepped up, data showed on Friday.Tesla Inc controlled 59.6% of the … [+305 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "yahoo.com",
      title:
        "Why one investor says Elon Musk's reign as CEO of Tesla, Twitter, and SpaceX may be 'entering the end game'",
      description:
        "Why one investor says Elon Musk's reign as CEO of Tesla, Twitter, and SpaceX may be 'entering the end game' • None Elon Musk's days as CEO of three high-profile companies might soon be over, investor Dan Nathan said. • None Nathan pointed to Musk's mountain o…",
      url: "https://biztoc.com/x/992f2dd07f78ad57",
      urlToImage: "https://c.biztoc.com/p/992f2dd07f78ad57/og.webp",
      publishedAt: "2023-04-22T11:36:04Z",
      content:
        "Why one investor says Elon Musk's reign as CEO of Tesla, Twitter, and SpaceX may be 'entering the end game'None Elon Musk's days as CEO of three high-profile companies might soon be over, investor Da… [+258 chars]",
    },
    {
      source: {
        id: null,
        name: "SFGate",
      },
      author: "Silas Valentino",
      title:
        "I camped at Weekend 1 of Coachella 2023. And made a terrible mistake.",
      description:
        '"Leading up to the 2023 Coachella Valley Music and Arts Festival, we strategized for the 4-day campout in the California desert. But we missed one key detail."',
      url: "https://www.sfgate.com/sf-culture/article/camping-coachella-2023-report-17907698.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/32/31/63/23698633/3/rawImage.jpg",
      publishedAt: "2023-04-22T11:23:47Z",
      content:
        "Our plan fell apart before the festival even started. We made spreadsheets, doled out duties and packed my Prius to a comfortable brim. We thought we had everything covered until the day before the f… [+10566 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Sam Tabahriti",
      title:
        "Alphabet CEO Sundar Pichai earned $226 million last year, making him one of the world's best-paid bosses",
      description:
        "The Google owner's CEO is only paid an annual salary of $2 million, but has also been given shares every three years worth more than $200 million.",
      url: "https://www.businessinsider.com/alphabet-ceo-sundar-pichai-pay-soars-226-million-2023-4",
      urlToImage:
        "https://i.insider.com/644392dab6607200180d1fef?width=1200&format=jpeg",
      publishedAt: "2023-04-22T11:21:46Z",
      content:
        "Sundar Pichai became Alphabet CEO in 2019.Jerod Harris/Getty Images\r\n<ul>\n<li>Sundar Pichai, CEO of Google owner Alphabet, was paid a total of $226 million in 2022.</li>\n<li>His package was boosted b… [+2194 chars]",
    },
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "businessinsider.com",
      title:
        "Tesla's market share in California plunged despite slashing prices this year, report says",
      description:
        "Elon Musk's Tesla is yet to unveil an affordable EV. Christian Marquard/Getty Images Tesla's market share in California plunged in California despite big price cuts, a report says. Data reviewed found Tesla's market share in the state fell from 72.7% to 59.6%…",
      url: "https://biztoc.com/x/f888444a0ab17062",
      urlToImage: "https://c.biztoc.com/p/f888444a0ab17062/og.webp",
      publishedAt: "2023-04-22T11:04:06Z",
      content:
        "Elon Musk's Tesla is yet to unveil an affordable EV.Christian Marquard/Getty ImagesTesla's market share in California plunged in California despite big price cuts, a report says.Data reviewed found T… [+300 chars]",
    },
    {
      source: {
        id: null,
        name: "Foreign Policy",
      },
      author: "Robert Muggah and Mac Margolis",
      title: "Will Brazil Destroy the Amazon to Save the Climate?",
      description:
        "Brazil’s mineral wealth could power the energy transition, but mining is a very dirty business.",
      url: "https://foreignpolicy.com/2023/04/22/brazil-lula-amazon-climate-environment-mining-minerals-energy-transition-electric-cars-ev-batteris-metals-rare-earths/",
      urlToImage:
        "https://foreignpolicy.com/wp-content/uploads/2023/04/mining-amazon-brazil-deforestation-GettyImages-1131713226.jpg?w=1000",
      publishedAt: "2023-04-22T11:00:15Z",
      content:
        "Whether it was gold, diamonds, or iron, the history of Brazil has been shaped for centuries by the hunt for minerals. Colonial fortune hunters and their legions of pick-and-pan-wielding slaves dredge… [+10946 chars]",
    },
  ];
  async componentDidMount() {
    this.setState({ page: 1});
    this.updateNews();
    this.setState({ page: this.state.page+1});
  }

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = "NewMonkey - " + this.capitalise(this.props.category);
  }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=f49e7309b8b746aab778c047f75215ee&page=${this.state.page+1}&pagesize=${this.props.pageSize+1}`;
        try {
            this.setState({ loading: true });
            const res = await fetch(url);
            this.props.setProgress(30);
            const data = await res.json();
            this.props.setProgress(70);
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });
    } catch (e) {
      console.log("something is not working");
        }
        this.props.setProgress(100);
  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page+1 });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=f49e7309b8b746aab778c047f75215ee&page=${this.state.page+1}&pagesize=${this.props.pageSize+1}`;
    try {
      this.setState({ loading: true });
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
        loading: false,
      });
    } catch (e) {
      console.log("something is not working");
    }
  };

  render() {
    return (
      <>
        <h1
          className="my-3 dark-outline text-center"
          style={{ margin: "35px 0" }}
        >
          NewsMonkey - Top {this.capitalise(this.props.category)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ this.state.loading &&
              <Spinner />
          }
        >
          <div className="container my-3 mx-auto">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      className="text-truncate"
                      title={element.title}
                      description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://cdn.vox-cdn.com/thumbor/queMnrIcfFscUqy2kGBdZfKEybM=/0x0:2048x1365/1200x628/filters:focal(1024x683:1025x684)/cdn.vox-cdn.com/uploads/chorus_asset/file/24585480/236609_Rivian_R1S_review_DGolson_001.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source = {element.source}      
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
