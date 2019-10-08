import React from 'react'
import styles from "./index.module.css"

export default class Finish extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className={styles.result_info + ' ' + styles.result_table + " col-md-12"}>
                        Спасибо!
                    </div>
                </div>
                <div className="row">
                    <div className={styles.result_info + " col-md-12"}>
                        Результат теста отправлено!
                    </div>
                </div>
            </div>
        )
    }
}