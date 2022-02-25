import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdEye, IoMdEyeOff } from 'react-icons/ai';

const usePasswordToggle = () => {
    const [visible, setVisiblity] = useState(false);

    const Icon = (
        <FontAwesomeIcon
            icon={visible ? IoMdEyeOff : IoMdEye}
            onClick={() => setVisiblity(visiblity => !visiblity)}
        />
    );

    const InputType = visible ? "text" : "password";
    console.log("works")
    return [InputType, Icon];
};

export default usePasswordToggle;