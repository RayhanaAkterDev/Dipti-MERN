const Football = ({ team, setTeam }) => {
    return (
        <div className="team-container">
            <div className="team-info">
                <p className="text-sm text-slate-500">Current Team Info</p>

                <h2 className="text-lg font-bold text-slate-800">{team}</h2>
            </div>
            <div className="flex gap-4">
                <button onClick={() => setTeam("Brazil")} className="btn btn-primary">
                    Brazil
                </button>
                <button onClick={() => setTeam("Argentina")} className="btn btn-danger">
                    Argentina
                </button>
            </div>
        </div>
    );
};

export default Football;
