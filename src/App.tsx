import React, {ChangeEvent, useState} from 'react';
import './styles/App.css'

function App() {
    let [value, setValue] = useState('Input text')

    const inputOnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className="App">
            <div className="post">
                <div className="post_content">
                    <strong>Lorem ipsum.</strong>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque est exercitationem placeat
                        porro
                        veritatis.
                    </div>
                </div>
                <div className="post_button">
                    <button>Delete</button>
                </div>

            </div>
        </div>
    );
}

export default App;
