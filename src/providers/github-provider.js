import React, { createContext, useCallback, useState } from "react";
import api from "../services/api"

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: []
});

const GithubProvider = props =>{
    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            following: 0,
            followers: 0,
            publicGists: 0,
            publicRepos: 0
        },
        repositories: [],
        starred: []
    });

    const getUser = (username) =>{
        setGithubState( prevState => ({
            ...prevState,
            loading: !prevState.loading
        }));
        api.get(`users/${username}`)
            .then( ({data}) => {
                setGithubState(prevState => ({
                    ...prevState,
                    user: {
                        id: data.id,
                        avatar: data.avatar_url,
                        login: data.login,
                        name: data.name,
                        html_url: data.html_url,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        following: data.following,
                        followers: data.followers,
                        publicGists: data.public_gists,
                        publicRepos: data.public_repos
                    }
                }));
            }
        ).finally(() => {
            setGithubState( prevState => ({
                ...prevState,
                loading: !prevState.loading
            }))
        })
    };

    const getUserRepos = (username) =>{
        api.get(`users/${username}/repos`)
            .then( ({data}) => {
                setGithubState(prevState => ({
                    ...prevState,
                    repositories: data
                }));
            }
        )
    };

    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`)
            .then( ({data}) => {
                setGithubState(prevState => ({
                    ...prevState,
                    starred: data
                }));
            }
        )
    };

    const contextValue = {
        githubState,
        getUser: useCallback(username => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), [])
    };

    return (
        <GithubContext.Provider
            value={contextValue}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubProvider;