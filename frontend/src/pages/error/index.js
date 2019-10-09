import React from 'react'
import styles from './index.module.css'

export default class Error extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.error_header}>
                        Упс... Что-то пошло не так =(
                    </div>
                    <div className={styles.error_info}>
                        {this.props.error}
                    </div>
                </div>
            </div>
        )
    }
}
