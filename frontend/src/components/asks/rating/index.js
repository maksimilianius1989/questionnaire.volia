import React, {Component} from 'react'
import styles from "./index.module.css"
import EmotionBtn from "~c/buttons/emotion"

export default class RatingAsk extends Component {
    state = {
        btnData: [
            {
                isSelect: false,
                evaluationNumber: 1,
                id: 1
            },
            {
                isSelect: false,
                evaluationNumber: 2,
                id: 2
            },
            {
                isSelect: false,
                evaluationNumber: 3,
                id: 3
            },
            {
                isSelect: false,
                evaluationNumber: 4,
                id: 4
            },
            {
                isSelect: false,
                evaluationNumber: 5,
                id: 5
            },
            {
                isSelect: false,
                evaluationNumber: 6,
                id: 6
            },
            {
                isSelect: false,
                evaluationNumber: 7,
                id: 7
            },
            {
                isSelect: false,
                evaluationNumber: 8,
                id: 8
            },
            {
                isSelect: false,
                evaluationNumber: 9,
                id: 9
            },
            {
                isSelect: false,
                evaluationNumber: 10,
                id: 10
            },
        ]
    }

    smileIconSrc = {
        red: "http://questionnaire.volia.loc/images/red-smile.png",
        orange: "http://questionnaire.volia.loc/images/orange-smile.png",
        green: "http://questionnaire.volia.loc/images/green-smile.png",
    }

    getIconSrc(number) {
        let length = this.state.btnData.length;
        let percent = number * 100 / length;
        if (percent <= 33) {
            return this.smileIconSrc.red
        } else if (percent <= 66) {
            return this.smileIconSrc.orange
        } else {
            return this.smileIconSrc.green
        }
    }

    onChoice = (id) => {
        let locBtnData = this.state.btnData;

        for(let item of locBtnData) {
            if (item.id !== id) {
                item.isSelect = false;
            } else {
                item.isSelect = true
            }
        }

        this.setState({btnData: locBtnData})
    }

    render() {
        return (
            <div className="ask_container">

                <div className={styles.ask}>
                    <div className={"row " + styles.ask_header}>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-2">
                                    Вопрос <span className={styles.ask_count}>1</span> из <span className={styles.ask_count}>15</span>
                                </div>
                                <div className="col-md-10">
                                    В водной части тренер(ы) четко изложили цели тренинга и его структуру.
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

                            {this.state.btnData.map((item, key) => {

                                return <EmotionBtn
                                    key={item.id}
                                    id={item.id}
                                    onChoice={this.onChoice}
                                    imgSrc={this.getIconSrc(key)}
                                    evaluationNumber={item.evaluationNumber}
                                    isSelect={item.isSelect}
                                />
                            })}

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