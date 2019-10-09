import React, {Component} from 'react'
import Header from '~c/header'
import Footer from '~c/footer'
import Start from '~p/start'
import Finish from '~p/finish'
import Rating from '~p/rating'
import Test from '~p/test'
import Error from '~p/error'
import withStore from "~/hocs/withStore"

class Home extends Component {
    state = {
        page: <Start
                    model = {this.initModel()}
                    onChoicePage={this.onChoicePage.bind(this)}
                />
    }

    initModel() {
        let model
        switch (localStorage.getItem('type')) {
            case 'rating':
                model = this.props.stores.rating
                break;

            case 'test':
                model = this.props.stores.test
                break;

            default:
                model = this.props.stores.test
        }

        return model
    }

    onChoicePage(pageName = 'start') {
        let page;
        switch (pageName) {
            case 'rating':
                page = <Rating onChoicePage={this.onChoicePage.bind(this)} />
                break

            case 'test':
                page = <Test onChoicePage={this.onChoicePage.bind(this)} />
                break

            case 'finish':
                page = <Finish />
                break

            default:
                page = <Start onChoicePage={this.onChoicePage.bind(this)} />
        }

         this.setState({
             page: page
         })
    }

    render() {
        let page
        if(this.props.error !== undefined &&
            this.props.error !== '' &&
            this.props.error !== null) {
            page = <Error error={this.props.error} />
        } else {
            page = this.state.page
        }

        return (
            <div className="container">
                <Header
                    model={this.initModel()}
                />

                {page}

                <Footer />
            </div>
        )
    }
}

export default withStore(Home)