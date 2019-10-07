import React, {Component} from 'react'
import styles from "./index.module.css"
import withStore from "~/hocs/withStore"

class Submit extends Component {
    render() {
        let ratingModel = this.props.stores.rating

        return (
            <div className="row">
                <div
                    className={styles.footer_container + " col-md-12"}
                >
                    <button
                        className="btn btn-success"
                        disabled={ratingModel.isDisabledSubmitBtn}
                    >
                        Завеншить оценку
                    </button>
                </div>
            </div>
        )
    }
}

export default withStore(Submit)
