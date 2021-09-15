import React from "react";
import * as S from "./styled";

const RepositoryItem = props =>
    <S.Wrapper href={props.linkToRepo} target="_blank" rel="noreferrer">
        <S.WrapperTitle>{props.name}</S.WrapperTitle>
        <S.WrapperFullName>full name:<br></br>{props.fullName}</S.WrapperFullName>
        <S.WrapperFullName></S.WrapperFullName>
        <S.WrapperDesc>{props.desc}</S.WrapperDesc>
    </S.Wrapper>

export default RepositoryItem;