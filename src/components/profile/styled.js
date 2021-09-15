import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
`;

export const WrapperUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 8px;
    height: 200px;
    h1 {
        font-size: 32px;
        font-weight: bold;
    }
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: flex-start;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    h3 {
        margin-right: 8px;
    }
    a {
        font-size: 18px;
        color: black;
        font-weight: bold;
        text-decoration: none;
        transition: 0.5s;
    }
    a:hover {
        transition: 0.5s;
        font-size: 19px;
        color: rgba(0, 0, 0, 0.5);
        text-decoration: underline;
    }
    span {
        font-weight: normal;
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;