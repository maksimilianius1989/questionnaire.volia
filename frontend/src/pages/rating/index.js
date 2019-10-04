import React from 'react'
import styles from './app.module.css'
import RatingAsk from '~c/asks/rating'
import Footer from '~c/footer/rating'

class Rating extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={styles.header_info + " row"}>
                    <div className="col-md-12">
                        Уважаемый коллега, оцените пожалуйста, уровень своего участия в тренинге «Эффективный менеджмент. Управление персоналом».
                        Ваше мнение о прошедшем тренинге очень важно для нас. Ваши оценки помогут сделать нашу совместную работу более эффективной, для этого ответьте на следующие вопросы:
                    </div>
                </div>

                <RatingAsk/>

                <div className="row">
                    <div className="col-md-12">

                        <Footer />

                    </div>
                </div>
            </div>
        )
    }
}

export default Rating