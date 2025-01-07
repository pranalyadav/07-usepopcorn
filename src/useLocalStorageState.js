import { useState, useEffect } from "react";

export function useLocalStorageState(initialSate, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : initialSate;
    });

    useEffect(function () {
        localStorage.setItem("watched", JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}