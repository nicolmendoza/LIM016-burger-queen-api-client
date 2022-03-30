import React from 'react'
import style from 'styled-components'

const StatusCard = props => {
    return (
        <Card>
            <Icon className="status-card__icon">
                <i className={props.icon}></i>
            </Icon>
            <div className="status-card__info">
                <h4 style={{ fontSize: '1.5rem'}}>{props.count}</h4>
                <span style={{ fontSize: '13px'}}>{props.title}</span>
            </div>
        </Card>
    )
}

const Card = style.div`
    background: #111111;
    padding: 1rem 1rem;
    border-radius: 0.4rem;
    line-height: 1.8rem;
    display: flex;
    align-items: center;
    width:30%;
`

const Icon = style.div`
    font-size: 2rem;
    margin-right: 1rem;
    background: #68686885;
    padding: 0.2rem;
    border-radius: 0.4rem;
    color: #47a30e;
`
// const Info = style.div`
//     flex-grow: 1;
//     text-align: center;
//     z-index: 1;
//     text-transform: capitalize;
// `

export default StatusCard