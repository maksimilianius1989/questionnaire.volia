import React, {Component} from 'react'
import styles from './index.module.css'

export default class Footer extends Component {
    render() {
        let date = new Date()

        return (
            <div className="row">
                <div className={styles.footer_container + " col-md-12"}>
                    Volia {date.getFullYear()}
                </div>
            </div>
        )
    }
}
