import React from 'react'
import withStore from "~/hocs/withStore"
import styles from './index.module.css'
import RatingAsk from '~c/asks/rating'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Header from '~c/header'
import Footer from '~c/footer'

class Rating extends React.Component {
    ratingModel = this.props.stores.rating

    changeBtnType() {
        if (this.ratingModel.isSendingStatus) {
            return <Button variant="success" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Отправка...
            </Button>
        }

        return <button
                    onClick={() => this.ratingModel.send()}
                    className="btn btn-success"
                    disabled={this.ratingModel.isDisabledSubmitBtn}
                >
                    Завеншить оценку
                </button>
    }

    render() {
        return (
            <div className="container">

                <Header />

                <div className={styles.title_info + " row"}>
                    <div className="col-md-8">Название: {this.ratingModel.title}</div>
                    <div className="col-md-4">Автор: {this.ratingModel.author}</div>
                </div>

                <div className={styles.description_info + " row"}>
                    <div className="col-md-12">{this.ratingModel.description}</div>
                </div>

                {
                    this.ratingModel.questionnaires.map((item, key) => {
                        return <RatingAsk
                            key={item.id}
                            id={item.id}
                            iconsSrc={this.ratingModel.iconsSrc}
                            numberAsk={key + 1}
                            imgSrc={item.img_src}
                            asksCount={this.ratingModel.questionnaires.length}
                            description={item.description}
                            maximumScore={item.maximum_score}
                            stores={this.props.stores}
                            selectScore={item.selectScore}
                        />
                    })
                }

                <div className="row">
                    <div
                        className={styles.submit_container + " col-md-12"}
                    >
                        {this.changeBtnType()}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default withStore(Rating)
