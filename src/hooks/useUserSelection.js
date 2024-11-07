import { useState } from "react";

export function useUserSelection() {
    const [userSelection, setUserSelection] = useState('');

    const isUserSelectionEmpty = userSelection === '';

    return { userSelection, setUserSelection, isUserSelectionEmpty };
}