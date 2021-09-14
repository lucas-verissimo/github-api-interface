import React from "react";
import useGithub from "../../hooks/github-hooks"
import * as S from "./styled";

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <S.Wrapper>
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
                        <h3>Company:</h3>
                        <span>{githubState.user.company}</span>
                    </S.WrapperInfoUser>
                    <S.WrapperInfoUser>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </S.WrapperInfoUser>
                    <S.WrapperInfoUser>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                            {githubState.user.blog}
                        </a>
                    </S.WrapperInfoUser>
                </div>
                
                <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>{ githubState.user.followers }</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>{ githubState.user.following }</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span>{ githubState.user.publicGists }</span>
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