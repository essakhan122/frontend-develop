import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <FontAwesomeIcon
            icon={visible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye-slash"}
            onClick={() => setVisiblity(visiblity => !visiblity)}
        />
    );

    const InputType = visible ? "text" : "password";
    console.log("works")
    return [InputType, Icon];
};

export default usePasswordToggle;