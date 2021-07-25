import axios from 'axios';
import React, {Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {withRouter} from "react-router-dom";
import Crypt from '../../utilities/crypt';

const Register = (props) => {

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
                <h1>REGISTER</h1>
                <p>Here is where we create a new allet and download the login certificate file.</p>
            
            </Fragment>
        )
    }

    return (
        <Fragment>
            {UI()}
        </Fragment>
    )

}

export default withRouter(Register)
