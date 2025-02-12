import React, { useState } from 'react';
import Modal from "react-modal";
import ReactModal from "react-modal";
import * as styles from './modal.scss';

ReactModal.setAppElement('body');

export default function App() {
    const[modal01Open, setModal01Open] = useState(false);
    const[modal02Open, setModal02Open] = useState(false);
    const[modal03Open, setModal03Open] = useState(false);
    const[modal04Open, setModal04Open] = useState(false);
    const[modal05Open, setModal05Open] = useState(false);

    return (
        <>
            {/* example modal01: Minimal */}
            <button>modal01</button>
            <br/><br/>

            <Modal
                isOpen={false}
                contentLabel="modal01 example">
                <h1>modal01</h1>
                <button>
                    Close
                </button>
            </Modal>


            {/* example modal02: Using onRequestClose */}
            <button>modal02</button>
            <br/><br/>

            <Modal
                isOpen={false}
                contentLabel="modal02 example">
                <h1>modal02</h1>
                <button>
                    Close
                </button>
            </Modal>


            {/* example modal03: Using shouldCloseOnOverlayClick */}
            <button>modal03</button>
            <br/><br/>
            <Modal
                isOpen={false}
                contentLabel="modal03 example">
                <h1>modal03</h1>
                <button>
                    Close
                </button>
            </Modal>


            {/* example modal04: Using inline styles */}
            <button onClick={() => setModal04Open(true)}>modal04</button>
            <br/><br/>

            <Modal
                isOpen={modal04Open}
                contentLabel="modal04 example">
                <h1>modal04</h1>
                <button>
                    Close
                </button>
            </Modal>


            {/* example modal04: Using CSS/SASS styles */}
            <button onClick={() => setModal05Open(true)}>modal05</button>
            <br/><br/>

            <Modal
                isOpen={modal05Open}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{content: {width: 350}}}
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    하하하하하하하~
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button onClick={() => setModal05Open(false)}>확인</button>
                    <button onClick={() => setModal05Open(false)}>취소</button>
                </div>
            </Modal>
        </>
    );
}