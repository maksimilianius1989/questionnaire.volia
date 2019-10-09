import React from 'react'
import styles from './index.module.css'
import withStore from "~/hocs/withStore"

class Start extends React.Component {
    model = this.props.model

    render () {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">Тестирующий:</div>
                        <div className="col-md-6">{this.model.userName} ( {this.model.email} )</div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">Тип:</div>
                    <div className="col-md-6">{this.model.typeName}</div>
                </div>
                    <div className="row">
                        <div className="col-md-6">Название:</div>
                        <div className="col-md-6">{this.model.title}</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">Описание:</div>
                        <div className="col-md-6">{this.model.description}</div>
                    </div>
                    <div className={styles.start_field}>
                        <button
                            className='btn btn-success'
                            onClick={() => this.props.onChoicePage(this.model.type)}
                        >
                            Начать
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStore(Start)
