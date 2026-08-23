import { useState } from "react";
import ChangeText from "./components/ChangeText";
import Football from "./components/football/Football";
import Users from "./components/users/Users";

const App = () => {
    // useState -> To change text
    const [text, setText] = useState("Sumaya");
    const [team, setTeam] = useState("Brazil");
    return (
        <>
            <ChangeText text={text} setText={setText} />
            <Football team={team} setTeam={setTeam} />
            <Users />
        </>
    );
};

export default App;
