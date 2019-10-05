import React, {Component} from 'react'
import styles from "./index.module.css"

export default class Finish extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div
                        className={styles.footer_container + " col-md-12"}
                    >
                        <button
                            className="btn btn-success"
                            disabled={this.props.isDisabled}
                        >
                            Завеншить оценку
                        </button>
                    </div>
                </div>
            </>
        )
    }
}