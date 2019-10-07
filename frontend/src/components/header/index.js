import React, {Component} from 'react'
import withStore from "~/hocs/withStore"
import styles from "./index.module.css"

class Header extends Component {
    render() {
        let ratingModel = this.props.stores.rating

        return (
            <div className="row">
                <div className={styles.header_container + " col-md-12"}>
                    <img src={ratingModel.logoSrc} />
                </div>
            </div>
        )
    }
}

export default withStore(Header)
