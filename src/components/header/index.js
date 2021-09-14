import React, { useState } from "react";
import * as S from "./styled"
import useGithub from "../../hooks/github-hooks";

const Header = props => {
    const { getUser } = useGithub();
    const [UsernameForSearch, setUsernameForSearch] = useState();
    const submitGetUser = () => {
        if (!UsernameForSearch) return;
        return getUser(UsernameForSearch);
    };
        
    return (
        <header>
            <S.Wrapper>
                <input
                    type="text"
                    placeholder="Github username"
                    onChange={ event => setUsernameForSearch(event.target.value) }
                />
                <button type="submit" onClick={submitGetUser}>
                    SEARCH
                </button>
            </S.Wrapper>
        </header>
    );
};

export default Header;