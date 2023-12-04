import React from "react";
import styled from "styled-components";
export default function FormField({ children }) {
  return <Root>{children}</Root>;
}
const Root = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 10px;
  .action_buttons {
    display: flex;
    gap: 8px;
  }
`;
