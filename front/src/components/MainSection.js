import personOne from '../images/persons/person1.png'
import personTwo from '../images/persons/person2.png'
import personThree from '../images/persons/person3.png'
import personFour from '../images/persons/person4.png'
import personFive from '../images/persons/person5.png'
import personSix from '../images/persons/person6.png'
import personSeven from '../images/persons/person7.png'
import personEight from '../images/persons/person8.png'
import personNine from '../images/persons/person9.png'
import io from 'socket.io-client';
import {useState,useEffect} from 'react'
export function MainSection(){
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState({});
    // useEffect(() => {
    //     const newSocket = io(`http://${window.location.hostname}:3000`);
    //     setSocket(newSocket);
    //     return ()=> newSocket.close();
    // },[setSocket]);
    //
    // useEffect(()=>{
    //     const messageListener = (message,username)=>{
    //         setMessages((prevMessages)=>{
    //             const newMessages = {...prevMessages};
    //             newMessages[messages.id] = message;
    //             return newMessages;
    //         })
    //     }
    //     const deleteMessageListener = (messageID)=>{
    //         setMessages((prevMessages)=>{
    //             const newMessages = {...prevMessages};
    //             delete newMessages[messageID];
    //             return newMessages;
    //         })
    //     }
    //     socket.on('createMessage',messageListener);
    //     return ()=>{
    //         socket.off('message',messageListener);
    //     }
    // })
    return(
        <div className="flex justify-center space-x-16 mt-4">
            <div className="rounded-xl w-1/2">
                <img className="rounded w-full" src={personOne} alt="person-one-image"/>
            </div>
            <div className="grid grid-cols-2 gap-4 w-3/12">
                <img className="rounded" src={personTwo} alt="person-Two-image"/>
                <img className="rounded" src={personThree} alt="person-Three-image"/>
                <img className="rounded" src={personFour} alt="person-Four-image"/>
                <img className="rounded" src={personFive} alt="person-Five-image"/>
                <img className="rounded" src={personSix} alt="person-Six-image"/>
                <img className="rounded" src={personSeven} alt="person-Seven-image"/>
                <img className="rounded" src={personEight} alt="person-Eight-image"/>
                <img className="rounded" src={personNine} alt="person-Nine-image"/>
            </div>
        </div>
    )
}