import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    input {
        width: 400px;
        border: 1px solid black;
        border-radius: 8px;
        height: 40px;
        margin-right: 8px;
        font-size: 20px;
        padding-left: 8px;
    }
    button {
        border-radius: 8px;
        border: none;
        cursor: pointer;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        color: white;
        background-color: #141414;
        width: 100px;
        font-weight: bold;
        font-family: Roboto, sans-serif;
    }
    button:active {
        box-shadow: none;
    }
`;