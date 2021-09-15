import React from "react";
import useGithub from "../../hooks/github-hooks"
import * as S from "./styled";

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <S.Wrapper className="profile">
            <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />

            <S.WrapperUser>
                <div>
                    <h1>{ githubState.user.name }</h1>
                    <S.WrapperInfoUser>
                        <h3>Username: </h3>
                        <a href={ githubState.user.html_url } target="_blank" rel="noreferrer">
                            { githubState.user.login }
                        </a>
                    </S.WrapperInfoUser>
                    <S.WrapperInfoUser>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </S.WrapperInfoUser>
                    <S.WrapperInfoUser>
                        <h3>Bio: <span>{githubState.user.bio}</span></h3>
                    </S.WrapperInfoUser>
                </div>
                
                <S.WrapperStatusCount className="statuscount">
                    <div>
                        <h4>Followers</h4>
                        <span>{ githubState.user.followers }</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{ githubState.user.following }</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{ githubState.user.publicRepos }</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperUser>
        </S.Wrapper>
    );
};

export default Profile;