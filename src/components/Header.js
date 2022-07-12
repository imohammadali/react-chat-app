import profilePic from '../images/porfile.png';
export function Header({profileName}){
    return(
        <div className="bg-gray-600 w-11/12 p-2  flex items-center space-x-2 rounded self-center">
            <img className="h-7 h-7 rounded-full" src={profilePic} alt="Profile-pic"/>
            <span className="text-xs text-white">
                <span id="profileName">{profileName}</span> is presenting
            </span>
        </div>
    )
}