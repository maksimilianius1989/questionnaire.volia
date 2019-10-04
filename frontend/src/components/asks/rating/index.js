import React, {Component} from 'react'
import styles from "./rating_ask.module.css"
import EmotionBtn from "~c/buttons/emotion"

export default class RatingAsk extends Component {
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

                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>
                            <EmotionBtn/>

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