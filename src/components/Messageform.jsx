import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { upload } from "@testing-library/user-event/dist/upload";

const Messageform = (props) =>{
    const [value,setValue]= useState('');

    const {chatId , creds} = props ;
    const handleChange = (event) =>{
        setValue(event.target.value);
        isTyping(props, chatId);

    }
    const handleSubmit = (event) =>{
        event.preventDefault();

        const text = value.trim();

        if(text.length >0){
            sendMessage(creds , chatId , { text });
        }
        
    }
    const handleUpload = (event) =>{
        sendMessage(creds , chatId , { files : event.target.files , text : ''});

    }
    return (
        <form className="message-form" onSubmit={handleSubmit}>
            <input className="message-input"
                placeholder="Message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
                />
            <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
            <button type='submit' className="send-button">
                <SendOutlined className="send-icon"/>
            </button>
        </form>
    )

}

export default Messageform