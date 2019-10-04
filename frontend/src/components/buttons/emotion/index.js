import React, {Component} from 'react'
import styles from "./emotion.module.css"

export default class EmotionBtn extends Component {
    state = {
        isSelect: false
    }

    changeBtnState = () => {
        this.setState({isSelect: !this.state.isSelect})
    }

    render() {
        let styleClasses = this.state.isSelect ? styles.assessment_btn_active : ''

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <img className={styles.assessment_item} src="http://questionnaire.volia.loc/images/red-smile.png" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div
                            onClick={this.changeBtnState}
                            className={styles.assessment_item + ' '
                                + styles.assessment_btn + ' '
                                + styleClasses}
                        >
                            <span className={styles.assessment_number}>1</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
