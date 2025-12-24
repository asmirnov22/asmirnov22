import React, { useRef, useEffect } from "react";

function Card({ item, removeItem, updateTitle, toggleDone }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (item.title === '' && inputRef.current) {
            inputRef.current.focus();
        }
    }, [item.title]);

    return (
        <form className="card" action="">
            <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleDone(item.id)}
            />

            <input
                type="#"
                ref={inputRef}
                value={item.title}
                onChange={(e) => updateTitle(item.id, e.target.value)}
                onBlur={() => {
                    if
                        (item.title.trim() === '') {
                        removeItem(item.id);
                    }
                }}
                className={`title-input ${item.done ? 'done' : ''}`}
            />
        </form>
    );
}

export default Card;
