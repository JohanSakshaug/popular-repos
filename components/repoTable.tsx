import React, { useState } from "react";
import { Table } from "react-bootstrap";

import Row from "./row";
import Header from "./header";
import Arrows from "./arrows/arrows";

import { Repo } from "../types";

interface RepoTableProps {
  repos: Repo[];
  amountOfReposPerPage: number;
}

const RepoTable = ({ repos, amountOfReposPerPage }: RepoTableProps) => {
  const [currentPageIndex, setCurrentPage] = useState(0);

  const amountOfPages = Math.ceil(repos.length / amountOfReposPerPage);
  const isOnFirstPage = currentPageIndex === 0;
  const isOnLastPage = currentPageIndex === amountOfPages - 1;
  const amountOfReposOnLastPage =
    repos.length % amountOfReposPerPage || amountOfReposPerPage;

  const firstRepoInPageIndex = currentPageIndex * amountOfReposPerPage;
  const lastRepoInPageIndex =
    (isOnLastPage
      ? firstRepoInPageIndex + amountOfReposOnLastPage
      : firstRepoInPageIndex + amountOfReposPerPage) - 1;
  const reposForOnePage = repos.slice(
    firstRepoInPageIndex,
    lastRepoInPageIndex
  );

  const handleArrowLeftClick = () => {
    if (isOnFirstPage) return;
    setCurrentPage((currentPageIndex) => currentPageIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (isOnLastPage) return;
    setCurrentPage((currentPageIndex) => currentPageIndex + 1);
  };

  return (
    <>
      <Table striped bordered>
        <Header />
        <tbody>
          {reposForOnePage.map((repo) => (
            <Row key={repo.id} repo={repo} />
          ))}
        </tbody>
      </Table>
      <p>
        Side {currentPageIndex + 1} av {amountOfPages}
      </p>
      <Arrows
        onLeftClick={handleArrowLeftClick}
        onRightClick={handleArrowRightClick}
      />
    </>
  );
};

export default RepoTable;
