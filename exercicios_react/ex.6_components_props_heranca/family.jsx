import React from 'react'
import { childrenWithProps } from '../utils/reactUtils';

/* 1 Elemento - Herança
export default props => (
    <div>
        {props.children}
        { React.cloneElement(props.children, {...props}) }
    </div>
)
*/

/* Multiplo Elemento - Herança
export default props => (
    <div>
        { React.Children.map(props.children,
            child => React.cloneElement(child, {...props})) }
    </div>
)
*/

/* Multiplo Elemento com funcao em utils */
export default props => (
    <div>
       { childrenWithProps(props.children, props) }
    </div>
)
