import {Header} from "../components/Header";
import {ActivitiesBar} from "../components/ActivitiesBar";
import {MainSection} from "../components/MainSection";
export function Home(){
    return(
        <div className="home flex flex-col p-4 bg-gray-800 w-full h-full">
            <Header profileName="Fathima"/>
            <MainSection/>
            <ActivitiesBar classroomName="class meeting"/>
        </div>
    )
}