import React from "react";
import * as S from "./styled";

const RepositoryItem = props =>
    <S.Wrapper href={props.linkToRepo} target="_blank" rel="noreferrer">
        <S.WrapperTitle>{props.name}</S.WrapperTitle>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperFullName>{props.fullName}</S.WrapperFullName>
    </S.Wrapper>

export default RepositoryItem;