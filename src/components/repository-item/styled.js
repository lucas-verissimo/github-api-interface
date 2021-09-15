import styled from "styled-components";

export const Wrapper = styled.a`
    text-decoration: none;
    color: black;
    padding: 15px 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 16px;
    width: 300px;
    height: 150px;
    align-content: center;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const WrapperTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
`;

export const WrapperFullName = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #2d3748;
`;

export const WrapperDesc = styled.h4`
    font-size: 16px;
    font-weight: normal;
`;
