import React, {Component} from 'react'
import withStore from "~/hocs/withStore"
import styles from "./index.module.css"

class Header extends Component {
    render() {
        let model = this.props.model

        return (
            <div className="row">
                <div className={styles.header_container + " col-md-12"}>
                    <img src={model.logoSrc} />
                </div>
            </div>
        )
    }
}

export default withStore(Header)
