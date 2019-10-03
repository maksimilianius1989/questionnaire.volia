import React from 'react'
import styles from './app.module.css'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={"row " + styles.ask_header}>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                Тема: Эффективный менеджмент. Управление персоналом
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                Вопрос <span className={styles.ask_count}>1</span> из <span className={styles.ask_count}>10</span>
                            </div>
                            <div className="col-md-10">
                                Планирование действий — это . . .
                            </div>
                        </div>
                    </div>
                </div>
                <div className="assessment_container">

                    <div className={styles.ask_item + " row"} >
                        <div className={styles.center + " col-md-1"}>
                            <div className={styles.check_box}>
                                <div className={styles.check_box + " " + styles.check_box_child}></div>
                            </div>
                        </div>
                        <div className={styles.answer_variant + " col-md-11"} >
                            border-top-left-radius — для верхнего левого угла; border-top-right-radius — для верхнего правого угла; border-bottom-left-radius — для нижнего левого угла; border-bottom-right-radius — для нижнего правого угла.
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default App