import React from "react";

/*
@author:    Nigel Abrera
@date:      March 05, 2024
*/
export interface TableColumn {
  key: string;
  title: string;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[][];
  children?: React.ReactNode; // Footer type, allowing for JSX content
  footer?: React.ReactNode;
}