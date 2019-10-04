import React, {Component} from 'react'
import styles from './footer.module.css'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className={styles.footer_container + " col-md-12"}>
                        <button className="btn btn-success">Завеншить оценку</button>
                    </div>
                </div>
            </>
        )
    }
}