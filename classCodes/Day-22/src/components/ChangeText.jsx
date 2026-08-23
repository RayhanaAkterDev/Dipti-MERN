const ChangeText = ({ text, setText }) => {
    const changeText = () => {
        setText("Raja Ahmed");
    };

    return (
        <div className="div-center">
            {/* Change text on mouseOver */}
            <h1 onMouseOver={() => setText("Sumaya")} className="text-4xl font-fancy">
                My name is {text}
            </h1>

            {/* Change text on onClick */}
            <button onClick={changeText} className="btn btn-dark">
                Change Text
            </button>
        </div>
    );
};

export default ChangeText;
