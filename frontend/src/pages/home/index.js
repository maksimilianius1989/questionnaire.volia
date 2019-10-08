import React, {Component} from 'react'
import Header from '~c/header'
import Footer from '~c/footer'
import Start from '~p/start'
import Finish from '~p/finish'
import Rating from '~p/rating'
import Test from '~p/test'
import Error from '~p/error'

export default class Home extends Component {
    state = {
        page: <Start
                    onChoicePage={this.onChoicePage.bind(this)}
                />
    }

    onChoicePage(pageName = 'start') {
        let page;
        switch (pageName) {
            case 'rating':
                page = <Rating
                            onChoicePage={this.onChoicePage.bind(this)}
                        />
                break

            case 'finish':
                page = <Finish />
                break

            default:
                page = <Start
                            onChoicePage={this.onChoicePage.bind(this)}
                        />
        }

         this.setState({
             page: page
         })
    }

    render() {
        let page
        if(this.props.errorInfo !== undefined && this.props.errorInfo !== '') {
            page = <Error errorInfo={this.props.errorInfo} />
        } else {
            page = this.state.page
        }

        return (
            <div className="container">
                <Header />

                {page}

                <Footer />
            </div>
        )
    }
}
