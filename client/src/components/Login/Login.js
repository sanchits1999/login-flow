import React, { useState, useEffect } from "react"
import Hstyle from "./Login.module.css"
import { InputGroup, FormControl } from "react-bootstrap"
import { connect } from "react-redux"
import { login, logout } from "../../actions/auth"
import {Redirect} from "react-router-dom"

const Login = (props) => {

    const [username, setu] = useState("")
    const [password, setp] = useState("")

    console.log(props.username)

    useEffect(() => {
        if (props.error != null) {
            alert(props.error)
        }
    }, [props.error])

    const HandleLogin = () => {
        let error1 = null
        let error2 = null
        if (username.trim().length === 0) {
            error1 = "Username cannot be empty!"
        }
        if (password.trim().length === 0) {
            error2 = "Password cannot be empty!"
        }

        if (error1 === null & error2 === null) {
            // props.seterror()
            props.login(username, password)
        } else {
            props.seterror("Fields cannot be empty!")
        }

    }

    return (
        <div className={Hstyle.parent}>
            {props.username!==null?<Redirect to="/home"/>:null}
            <div className={Hstyle.background}>
                <img className={Hstyle.bgimage} src={"https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&w=1000&q=80"} />
            </div>
            <div className={Hstyle.main}>
                <div className={Hstyle.Lparent}>
                    <div className={Hstyle.Htext}>LOGIN</div>
                    <InputGroup className={Hstyle.input1}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Username</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" value={username} aria-label="With textarea" onChange={(txt) => { setu(txt.currentTarget.value) }} />
                    </InputGroup>

                    <InputGroup className={Hstyle.input2}>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Password</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" value={password} aria-label="With textarea" onChange={(txt) => { setp(txt.currentTarget.value) }} />
                    </InputGroup>

                    <div onClick={() => {
                        HandleLogin()
                    }} className={Hstyle.Lbutton}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

const MapdispatchtoProps = (dispatch) => {
    return {
        login: (name, password) => {
            dispatch(login(name, password))
        },
        logout: () => {
            dispatch(logout())
        },
        seterror: (error) => {
            dispatch({ type: "seterror", payload: error })
        }
    }
}

const MapstatetoProps = (state) => {
    return {
        error: state.error,
        username: state.username
    }
}

export default connect(MapstatetoProps, MapdispatchtoProps)(Login)