import React from "react";
import styled from "styled-components";
import FormField from "../../styledComponents/FormField";
export default function FormFields() {
  const dummyData = [
    {
      id: 1,
      name: "Lead name 1",
      actions: { call: "", mail: "", web: "", link: "" },
      assigned: "Chirag",
      created: "23rd Nov 2023 06:50 PM ",
      lastActivitiy: "Call task created 2 hours ago",
    },
    {
      id: 2,
      name: "Lead name 2",
      actions: { call: "", mail: "", web: "", link: "" },
      assigned: "Ankit",
      created: "23rd Nov 2023 06:50 PM ",
      lastActivitiy: "Call task created 2 hours ago",
    },
  ];
  return (
    <Root>
      <hr />
      <h2>Responses </h2>
      <table>
        <thead>
          <tr>
            <th>Lead name</th>
            <th>Actions</th>
            <th>Assigned to</th>
            <th>Created at</th>
            <th>Last activity</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => {
            return (
              <tr>
                <td data-label="Lead Name">{item.name}</td>
                <td className="action_buttons" data-label="Actions">
                  <div>
                    <img src="/icons/call.png" />
                    <img src="/icons/mail.png" />
                    <img src="/icons/web.png" />
                    <img src="/icons/link.png" />
                  </div>
                </td>
                <td data-label="Assigned to">{item.assigned}</td>
                <td data-label="Created at">{item.created}</td>
                <td data-label="Last Activity">{item.lastActivitiy}</td>
              </tr>
            );
          })}
        </tbody>
        <tr></tr>
      </table>
    </Root>
  );
}
const Root = styled.div`
  hr {
    margin-top: 20px;
  }
  h6 {
    opacity: 1;
  }
  table {
    width: 100%;
    /* border-collapse: collapse; */
    border-collapse: separate;
    border-spacing: 0 15px;
    border-radius: 10px;
  }
  th,
  td {
    background-color: #ffffff;
    padding: 8px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
  tr {
    margin: 10px;
    th:first-child,
    td:first-child {
      border-radius: 10px 0 0 10px;
    }
    th:last-child,
    td:last-child {
      border-radius: 0 10px 10px 0;
    }
  }
  .action_buttons {
    > div {
      display: flex;
      gap: 4px;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    th,td{
        border-radius:unset;
    }
      }
    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }
    table td:last-child {
      border-bottom: 0;
    }
    .action_buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
        justify-content: end;
      }
    }
    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    tr {
    th:first-child,
    td:first-child {
      border-radius: 0px;
    }
    th:last-child,
    td:last-child {
        border-radius: 0px;
    }
  }
}
  
`;
