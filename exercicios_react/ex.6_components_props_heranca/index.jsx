import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Silva'>
            <Member name='Edvan' />
            <Member name='Julia' />
    </Family>
, document.getElementById('app'))