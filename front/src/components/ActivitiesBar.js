import micIcon from '../images/mic.svg';
import cameraIcon from '../images/camera.svg';
import subtitleIcon from '../images/subtitle.svg';
import raiseHandIcon from '../images/raiseHand.svg';
import presentIcon from '../images/presenting.svg';
import menuIcon from '../images/menu.svg';
import dialIcon from '../images/dial.svg';
import iIcon from '../images/i.svg';
import everyOneIcon from '../images/showEveryOne.svg';
import chatIcon from '../images/chat.svg';
import activitiesIcon from '../images/activities.svg';


import {FullRoundedButton} from "./buttons/FullRoundedButton";

export function ActivitiesBar({classroomName}){
    return(
        <div className="flex p-5 items-center justify-around mt-5">
            <div className="text-white text-sm">{classroomName}</div>
            <div className="flex space-x-4">
                <FullRoundedButton>
                    <img className="w-4 h-4" src={micIcon} alt="mic-icon"/>
                </FullRoundedButton>
                <FullRoundedButton>
                    <img className="w-4 h-4" src={cameraIcon} alt="camera-icon"/>
                </FullRoundedButton>
                <FullRoundedButton>
                    <img className="w-4 h-4" src={subtitleIcon} alt="subtitle-icon"/>
                </FullRoundedButton>
                <FullRoundedButton>
                    <img className="w-4 h-4" src={raiseHandIcon} alt="raiseHand-icon"/>
                </FullRoundedButton>
                <FullRoundedButton>
                    <img className="w-4 h-4" src={presentIcon} alt="screenShare-icon"/>
                </FullRoundedButton>
                <FullRoundedButton>
                    <img className="w-4 h-4" src={menuIcon} alt="menu-icon"/>
                </FullRoundedButton>
                <div className="h-10 w-1/5 p-2 flex justify-center items-center text-white bg-red-500 rounded-2xl">
                    <img className="w-4 h-4" src={dialIcon} alt="dial-icon"/>
                </div>
            </div>
            <div className="flex space-x-3 items-center">
                    <img className="w-4 h-4" src={iIcon} alt="i-icon"/>
                    <img className="w-4 h-4" src={everyOneIcon} alt="show-everyone-icon"/>
                    <img className="w-4 h-4" src={chatIcon} alt="chat-icon"/>
                    <img className="w-4 h-4" src={activitiesIcon} alt="activities-icon"/>
            </div>
        </div>
    )
}