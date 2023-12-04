import React from "react";
import styled from "styled-components";
import PrimaryButton from "../../styledComponents/PrimaryButton";

export default function FormDetails() {
  return (
    <Root>
      <div className="top_bar">
        <div className="user_details">
          <h1>Form name</h1>
          <p>Created by Amit on 23 Nov 2023</p>
        </div>
        <div className="action_buttons">
          <div>
            <PrimaryButton>
              <img src="/icons/options.png" />
              <h3>Options</h3>
            </PrimaryButton>
            <PrimaryButton>
              <img src="/icons/edit.png" />
              <h3>Edit Form</h3>
            </PrimaryButton>
            <PrimaryButton>
              <img src="/icons/preview.png" />
              <h3>Preview</h3>
            </PrimaryButton>
            <PrimaryButton>
              <img src="/icons/publish.png" />
              <h3>Publish</h3>
            </PrimaryButton>
          </div>
          <p>Published 2 days ago</p>
        </div>
      </div>
      <h6 className="change_btn">
        Saving responses to default lead list.{" "}
        <span >Change</span>
      </h6>
      <div className="response_tab">
        <div>
          <h2>Responses</h2>
          <h2>20</h2>
        </div>
        <div>
          <h2>Unique views</h2>
          <h2>2,300</h2>
        </div>
        <div>
          <h2>Completion rate</h2>
          <h2>20 %</h2>
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  .top_bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:768px){
        flex-direction:column;
        align-items: unset;
    gap: 20px;
    }
    .user_details {
      h1 {
        margin: 10px 0px 20px;
      }
    }
    .action_buttons {
      text-align: right;
      > div {
        display: flex;
        flex-wrap:wrap;
        gap: 14px;
        margin-bottom: 10px;
      }
    }
  }
  .change_btn {
    margin-top:20px;
    span{
        margin-left: 10px;
    cursor: pointer;
    }
  }
  .response_tab {
    display:flex;
    gap:20px;
    margin-top:16px;
    flex-wrap:wrap;
    >div{
        /* min-width:150px; */
        background-color:#fff;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:10px;
        gap:20px;
    }
  }
`;
