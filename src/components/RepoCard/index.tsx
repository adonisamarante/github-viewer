import React from 'react';

import { RepoCardContainer, TopDiv, BottomDiv } from './styles';

type Repo = {
  readonly name: string,
  readonly language: string,
  readonly stargazers_count: number,
  readonly html_url: string,
}

export default function RepoCard(repo: Repo) {
  const {
    name, language, stargazers_count, html_url,
  } = repo;
  return (
    <RepoCardContainer>
      <TopDiv>
        <p><a target="_blank" href={html_url} rel="noreferrer">{name}</a></p>
      </TopDiv>
      <BottomDiv>
        <p>{language}</p>
        <p>{`${stargazers_count} Stars`}</p>
      </BottomDiv>
    </RepoCardContainer>
  );
}
