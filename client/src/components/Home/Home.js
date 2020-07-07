import React from "react"
import Lstyle from "./Home.module.css"
import { connect } from "react-redux"
import { login, logout } from "../../actions/auth"
import { ItemContent } from "semantic-ui-react"

const Home = (props) => {

    console.log(props.data)

    return (
        <div className={Lstyle.parent}>
            <div className={Lstyle.header}>
                <div className={Lstyle.name}>
                    Hello {props.username}
                </div>
                <div onClick={() => { props.logout() }} className={Lstyle.logout}>
                    Logout
                </div>
            </div>
            <div className={Lstyle.grid}>
                {props.data.map((item) => {
                    return (
                        <div className={Lstyle.item}>
                            <div className={Lstyle.title}>
                                {item.title}
                            </div>
                            <div className={Lstyle.imagep}>
                                <img src={item.image} className={Lstyle.image} />
                            </div>
                            <div className={Lstyle.desc}>
                                {item.desc}
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

const MapstatetoProps = (state) => {
    return {
        data: state.data,
        username: state.username
    }
}

const MapdispatchtoProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout())
        }
    }
}

export default connect(MapstatetoProps, MapdispatchtoProps)(Home)