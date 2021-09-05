import React from "react";

import { Repo } from "../types";

interface RowProps {
  repo: Repo;
}

const Row = ({
  repo: { full_name, watchers, description, language },
}: RowProps) => {
  return (
    <tr>
      <td>{full_name}</td>
      <td>{description}</td>
      <td>{watchers}</td>
      <td>{language}</td>
    </tr>
  );
};

export default Row;
