import React, { useState, useEffect } from "react";
import pointer from "../assets/pointer.png";
import io from "socket.io-client";
// import ScrollToBottom from "react-scroll-to-bottom";
import ThreadCard from "../components/ThreadCard";

const socket = io.connect("http://localhost:3001/");

const Community = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [userName, setUserName] = useState("demo");

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: "1",
        author: "demo2",
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log(messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.emit("join_room", "1");
    socket.on("receive_message", (data) => {
      console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <>
      <div className="bg-[#1c1c24] flex relative  items-center flex-col rounded-[10px] sm:py-10  h-[90%]">
        <div className="w-full h-full mb-16">
          {/* <ScrollToBottom className="bg-[#24242e] flex h-[700px] overflow-y-auto border-t-1 border-b-1 border-gray-600">
          </ScrollToBottom> */}
          <ThreadCard />
        </div>
        <div className="absolute flex items-center inset-x-0 bottom-0 h-16 m-5 bg-[#32323e] rounded-md">
          <input
            type="text"
            className=" grow text-white mr-3 bg-[#32323e] p-4"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          />
          <button className="">
            <img
              src={pointer}
              className="h-7 w-7 m-5 rounded-md"
              onClick={sendMessage}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Community;
