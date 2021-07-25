import axios from 'axios';
import React, {Fragment, useState, useEffect } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux'
import {withRouter} from "react-router-dom";
import Crypt from '../../utilities/crypt';
const messageMaxLength = 1000

const chatRecipient = {
    publicKey: 'v2e8b85a45b4ba30b110463fcc125677fea79a0da619bcc30da372935f5b1d717',
    privateKey: 'vaf76fba4c4fb522d5e0f2ad34473271921ebe22bbf043355d09d981c39c293ec'
};

const Chat = (props) => {

    const t = useSelector(state => state.translations.translations);
    const [updated, setUpdated] = useState(false);
    const dispatch = useDispatch();
    const wallet = useSelector(state => state.wallet)
    const blocks = useSelector(state => state.blocks.chain)
    const [messageLength, setMessageLength] = useState(messageMaxLength)
    const [messageRecipient, setMessageRecipient] = useState('2e8b85a45b4ba30b110463fcc125677fea79a0da619bcc30da372935f5b1d717')

    useEffect(() => {

        console.log('WALLET', wallet)
        if(!updated){
            update();
      //      updateWallet();
      //      updateBlocks();
            setUpdated(true)
        }
    }, [wallet]);

    const update = () => {

        let r1 = axios.get(`${document.location.origin}/api/v1/wallet?address=${wallet.publicKey}`);
        let r2 = axios.get(`${document.location.origin}/api/v1/blocks`)
        axios.all([r1, r2])
        .then((response) => {
            batch(() => {
                dispatch({
                    type: 'SET_WALLET_ADDRESS',
                    payload: response[0].data.address
                });
                dispatch({
                    type: 'SET_WALLET_BALANCE',
                    payload: response[0].data.balance
                });
                dispatch({
                    type: 'SET_CHAIN',
                    payload: response[1].data
                });
            })

        })
        .catch(error => {console.log(error)})
    }

    const updateWallet = () => {
        console.log('CALLING UPDATE WALLET')
        axios.get(`http://localhost:7020/api/v1/wallet?address=${wallet.address}`)
        .then(results => {

            batch(() => {
                dispatch({
                    type: 'SET_WALLET_ADDRESS',
                    payload: results.data.address
                });
                dispatch({
                    type: 'SET_WALLET_BALANCE',
                    payload: results.data.balance
                });
            })
            
          })
        .catch(err => {
            console.log(err)
        });
    }

    const submitMessage = (e) => {
        e.preventDefault();
        let message = document.getElementById('message').value;
        document.getElementById('message').value = '';
        if(message.length > 0){
            let params = {
                'amount': 1,
                'recipient': messageRecipient,
                'payload': {"type": "message", "content": Crypt.encrypt(message, messageRecipient, wallet.privateKey), "hash": Crypt.hash( {message, senderWallet: wallet.publicKey} )}
            }
            axios.post(`${document.location.origin}/api/v1/transaction`, params)
            .then(response => {
                console.log(response.data)
      //          axios.post(`${document.location.origin}/api/v1/mine`, {data: response.data.transaction})
      //          .then( response => {
      //              console.log(response)
     //               update();
     //           });
            })
        }
    }

    const updateMsgLength = () => {
        let inputMsg = document.getElementById('message');
        let length = messageMaxLength - inputMsg.value.length;
        if(length >= 0){
            inputMsg.classList.remove('is-invalid');
        }else{
            inputMsg.classList.add('is-invalid');
        }
        setMessageLength(length)
    }
    

    const UI = () => {
        return (
            <Fragment>
                <h1>CHAT</h1>
                <p>Chat shall get all blocks relevant to this wallet and decrypt the payload. It will also accetp a new message payload and dispatch
                    the the transaction pool for mining. Test is back again
                </p>

                <h2>Blocks</h2>
                <ul>
                    {blocks.map( (block, index) => {
                        return (<li key={block.key} >{block.key}</li>)
                    })}
                </ul>

                <hr />
                <form className="form row">
                    <div className="form-group col-sm-10">
                        <textarea className="form-control" id="message" rows="2" placeholder="Enter message" autoFocus required wrap="soft" maxLength={messageMaxLength} onKeyUp={() => {updateMsgLength()}}/>
                        <small>{messageLength}</small>
                    </div>
                    <button type="button" className="btn btn-sm btn-primary col-2" onClick={(e) => {submitMessage(e)}}>Submit</button>
                </form>
                
            
            </Fragment>
        )
    }

    return (
        <Fragment>
            {UI()}
        </Fragment>
    )

}

export default withRouter(Chat)
