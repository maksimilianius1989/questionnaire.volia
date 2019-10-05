import React, {Component} from 'react'
import styles from "./index.module.css"

export default class EmotionBtn extends Component {
    render() {
        let styleClasses = this.props.isSelect ? styles.assessment_btn_active : ''

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <img
                            className={styles.assessment_item}
                            src={this.props.imgSrc}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div
                            onClick={(e) => this.props.onChoice(this.props.id)}
                            className={styles.assessment_item + ' '
                                + styles.assessment_btn + ' '
                                + styleClasses}
                        >
                            <span className={styles.assessment_number}>
                                {this.props.evaluationNumber}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
