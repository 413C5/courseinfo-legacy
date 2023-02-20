import React from "react";

const Total = ({ parts }) => {
    const total = parts.reduce((total, x) => total + x.exercises, 0)
    return (
        <b>
            total of {total} exercises
        </b>
    )
}

export default Total