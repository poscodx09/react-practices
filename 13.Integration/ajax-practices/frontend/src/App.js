import React, {useEffect, useState, useRef} from 'react';

import Modal from "react-modal";
import ReactModal from "react-modal";
import styled from 'styled-components';
import './assets/scss/App.scss';
import * as stylesModal from './assets/scss/Modal.scss';
import serialize from 'form-serialize';
import axios from 'axios';

const CreateForm = styled.form``;
const UpdateForm = styled.form``;
const ItemList = styled.ul``;
const Item = styled.li``;


ReactModal.setAppElement("body");

function App() {
    const refCreateForm = useRef(null);
    const [items, setItems] = useState(null);
    const [modalData, setModalData] = useState({
        item: {
            id: '',
            type: '',
            name: '',
            image: null,
        }
    })

    // 아이템 추가
    const addItem = async (item) => {
        try{
            const response = await fetch('/item', {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item)
            });

            const jsonResult = await response.json();

            if (!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)
            }

            setItems([jsonResult.data, ...items]);
            refCreateForm.current.reset();
        }
        catch(err){
            console.log(err);
        }
    }

    // 전체 아이템 조회회
    const fetchItems = async () => {
        try{
            const response = await fetch('/item', {
                method: "get",
                headers: {
                    'Accept': 'application/json',
                },
                body: null
            });

            if (!response.ok){
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const jsonResult = await response.json();

            if (jsonResult.result === 'fail'){
                throw new Error(`${jsonResult.message}`)
            }

            setItems(jsonResult.data);
        }
        catch(err){
            console.log(err);
        }
        
    };

    // 아이템 조회
    const fetchItem = async (id) => {
        try{
            const response = await axios.get(`/item/${id}`);
            const jsonResult = response.data;
            console.log(jsonResult.data);

            setModalData({
                open: !modalData.open,
                item: jsonResult.data
            })
        } catch(err){
            console.log(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        } 
    }

    // 아이템 삭제
    const deleteItem = async (id) => {
        try{
            const response = await axios.delete(`/item/${id}`);
            const jsonResult = response.data;
            console.log(jsonResult.data);
            setItems(items.filter((e) => e.id != jsonResult.data));
        } catch(err){
            console.log(err.response ? `${err.response.status} ${err.response.data.message}` : err);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div id='App'>

            <h1>AJAX: Restful API</h1>

            <div>
                <form
                    ref={refCreateForm}
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(e.target.type.value, e.target.name.value);
                        try {
                            /*
                            const item = Array.from(e.target, (el) => {
                                if(el.name !== '' && el.value === '') {
                                    throw new Error(`validation ${el.name} is empty`);
                                }

                                return {name: el.name, value: el.value};
                            })
                            .filter(({name}) => name !== '')
                            .reduce((res, {name, value}) => {
                                res[name] = value;
                                return res;
                            }, {});
                            */

                            Array.from(e.target, (el) => {
                                if(el.name !== '' && el.value === '') {
                                    throw new Error(`validation ${el.name} is empty`);
                                }
                                return null;
                            })

                            // const queryString = serialize(e.target);
                            const item = serialize(e.target, {hash: true})
                            addItem(item);
                        } catch(err) {
                            console.log(err);
                        }
                    }}>
                    <select name={'type'}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>
                    {' '}
                    <input type={'text'} name={'name'} placeholder={'name'}/>
                    <input type={'submit'} value={'[C]reate (post)'}/>
                </form>
                <form>
                    <select name={'type'}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>
                    {' '}
                    <input type={'text'} name={'name'} placeholder={'name'}/>
                    <input type={'file'} name={'file'} />
                    <input type={'submit'} value={'[C]reate (post)'}/>
                </form>
            </div>


            <h2 title={'[R]ead (get)'} onClick={() => fetchItems()}>Items</h2>


            <ItemList>
                {
                    items?.map((item, index) => <Item key={item.id}>
                        <h4>
                            <b title={'[R]ead (get)'} onClick={() => fetchItem(item.id)}>{item.name}</b>
                            <button onClick={() => deleteItem(item.id)}>{'[D]elete (delete)'}</button>
                        </h4>
                        <div>
                            <span>
                                <b>{index+1}</b>
                                <i>{item.type}</i>
                            </span>
                            <img src={item.image || '/assets/images/no-image.png'} />
                        </div>
                    </Item>)
                }
            </ItemList>



            <Modal
                isOpen={modalData.open}
                onRequestClose={() => setModalData({...modalData, open: !modalData.open})}
                className={stylesModal.Modal}
                overlayClassName={stylesModal.Overlay}
                style={{content: {width: 280}}}>
                <h3>Update Item</h3>
                <form onChange={(e) => {
                    console.log(e)
                }}>
                    <label>TYPE</label>
                    {' '}
                    <select name={'type'} value={modalData.item.type} onChange={(e) => setModalData({...modalData, item: {...modalData.item, type: e.target.value}})}>
                        <option>BOOK</option>
                        <option>CLOTHE</option>
                        <option>MUSIC</option>
                        <option>CAR</option>
                        <option>BEAUTY</option>
                        <option>MOVIE</option>
                        <option>FOOD</option>
                    </select>
                    <br/><br/>
                    <label>NAME</label>
                    {' '}
                    <input type={'text'} name={'name'} value={modalData.item.name} onChange={(e) => setModalData({...modalData, item: {...modalData.item, name: e.target.value}})}/>   
                    <hr />
                    <input type={"submit"} value={'[U]pdate (update)'} />
                </form>
            </Modal>

        </div>
    );
}

export {App};