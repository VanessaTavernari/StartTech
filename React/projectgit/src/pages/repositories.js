import React from "react";
import * as S from './styled-repositories'

export default function Repositories() {
    return(
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
                <S.ListItem>Repositório: Nome Repositório</S.ListItem>
            </S.List>
        </S.Container>
    )
}

