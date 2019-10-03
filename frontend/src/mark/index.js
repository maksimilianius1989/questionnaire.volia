import React from 'react'
import styles from './app.module.css'

class Mark extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={styles.header_info + " row"}>
                    <div className="col-md-12">
                        Уважаемый коллега, оцените пожалуйста, уровень своего участия в тренинге «Эффективный менеджмент. Управление персоналом».
                        Ваше мнение о прошедшем тренинге очень важно для нас. Ваши оценки помогут сделать нашу совместную работу более эффективной, для этого ответьте на следующие вопросы:
                    </div>
                </div>

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
                            <div className="col-md-1">
                                <div className={styles.assessment_text + ' ' + styles.assessment_text_no}>
                                    совершенно не согласен
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/red-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/red-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/red-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            3
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/orange-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/orange-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/orange-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            6
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/orange-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            7
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/green-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            8
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/green-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            9
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/green-smile.png" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className={styles.assessment_item + ' ' + styles.assessment_btn}>
                                            10
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className={styles.assessment_text + ' ' + styles.assessment_text_yes}>
                                    полностью согласен
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">Footer</div>
            </div>
        )
    }
}

export default Mark