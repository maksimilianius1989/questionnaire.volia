import React, {Component} from 'react'
import styles from "./index.module.css"
import EmotionBtn from "~c/buttons/emotion"

export default class RatingAsk extends Component {
    getIconSrc(number) {
        let length = this.props.maximumScore;
        let percent = number * 100 / length;
        if (percent <= 33) {
            return this.props.iconsSrc.red
        } else if (percent <= 66) {
            return this.props.iconsSrc.orange
        } else {
            return this.props.iconsSrc.green
        }
    }

    onChoice = (answerId) => {
        let ratingModel = this.props.stores.rating
        ratingModel.onChoice(this.props.id, answerId)
    }

    render() {
        let emotionButtons = []
        for (let i = 1; i <= this.props.maximumScore; i++) {
            let isSelect = false
            if (this.props.selectScore == i) {
                isSelect = true
            }

            emotionButtons.push(
                <EmotionBtn
                    key={i}
                    id={i}
                    onChoice={this.onChoice}
                    imgSrc={this.getIconSrc(i)}
                    evaluationNumber={i}
                    isSelect={isSelect}
                />
            )
        }

        return (
            <div className="ask_container">

                <div className={styles.ask}>
                    <div className={"row " + styles.ask_header}>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-2">
                                    Вопрос <span className={styles.ask_count}>{this.props.numberAsk}</span> из <span className={styles.ask_count}>{this.props.asksCount}</span>
                                </div>
                                <div className="col-md-10">
                                    <div className="row">
                                        <div className="col-md-12">
                                            {this.props.description}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img className={styles.ask_img}
                                                src={this.props.imgSrc}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className={styles.assessment_text + ' ' + styles.assessment_text_no}>
                                совершенно не согласен
                            </div>
                        </div>
                        <div className={styles.parent_emotion_container + " col-md-8"}>
                            {emotionButtons}
                        </div>
                        <div className="col-md-2">
                            <div className={styles.assessment_text + ' ' + styles.assessment_text_yes}>
                                полностью согласен
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
