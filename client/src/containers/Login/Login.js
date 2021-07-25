import axios from 'axios';
import React, {Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {withRouter} from "react-router-dom";
import Crypt from '../../utilities/crypt';

const Login = (props) => {

    const t = useSelector(state => state.translations.translations);
    const [updated, setUpdated] = useState(false);
    const dispatch = useDispatch();



    useEffect(() => {

        if(!updated){
            
            setUpdated(true)
        }
    });

    

    const UI = () => {
        return (
            <Fragment>
                <h1>LOGIN</h1>
                <p>Here we want to accept some wallet certifiacte that sets the environment and wallet address.
                    This certificate should be password protected. Once accepted update the store.wallet and the redirect to Chat
                </p>
            
            </Fragment>
        )
    }

    return (
        <Fragment>
            {UI()}
        </Fragment>
    )

}

export default withRouter(Login)
