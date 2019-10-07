import React from 'react'
import withStore from "~/hocs/withStore"
import styles from './index.module.css'
import RatingAsk from '~c/asks/rating'
import Finish from '~c/finish'
import Header from '~c/header'
import Footer from '~c/footer'

class Rating extends React.Component {
    render() {
        let ratingModel = this.props.stores.rating

        return (
            <div className="container">

                <Header />

                <div className={styles.title_info + " row"}>
                    <div className="col-md-8">Название: {ratingModel.title}</div>
                    <div className="col-md-4">Автор: {ratingModel.author}</div>
                </div>
                <div className={styles.description_info + " row"}>
                    <div className="col-md-12">{ratingModel.description}</div>
                </div>

                {
                    ratingModel.questionnaires.map((item, key) => {
                        return <RatingAsk
                            key={item.id}
                            id={item.id}
                            iconsSrc={ratingModel.iconsSrc}
                            numberAsk={key + 1}
                            imgSrc={item.img_src}
                            asksCount={ratingModel.questionnaires.length}
                            description={item.description}
                            maximumScore={item.maximum_score}
                            stores={this.props.stores}
                            selectAnswerId={item.selectAnswerId}
                        />
                    })
                }

                <Finish isDisabled={true} />

                <Footer />
            </div>
        )
    }
}

export default withStore(Rating)
