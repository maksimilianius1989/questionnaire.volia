import React, {Component} from 'react'
import Submit from '~c/buttons/submit'
import styles from './index.module.css'

export default class Finish extends Component {
    render() {
        return (
            <div className="row">
                <div className={styles.finish_container + " col-md-12"}>
                    <Submit />
                </div>
            </div>
        )
    }
}
