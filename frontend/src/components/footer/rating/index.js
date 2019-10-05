import React, {Component} from 'react'
import Finish from '~c/buttons/finish'

export default class Footer extends Component {
    render() {
        return (
            <>
                <Finish
                    isDisabled={true}
                />
            </>
        )
    }
}