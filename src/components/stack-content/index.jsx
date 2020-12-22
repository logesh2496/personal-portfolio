import React from "react";
import styled from "styled-components";
import Anchor from "../anchor";

const ContentWrapper = styled.div`
  overflow-y: auto;
  max-height: inherit;
`;
const UlWrapper = styled.ul`
  list-style-type: square;
  font-family: "Roboto Mono", monospace;
  line-height: 1.6;
`;
const Header = styled.div`
  font-weight: bold;
  text-align: center;
`;

const gmailRestApi =
  "https://developers.google.com/gmail/api/reference/rest/v1/users";
const webSql = `https://www.w3.org/TR/webdatabase/`;
const indexedDb = `https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API`;
const emailCompose = `https://developers.google.com/gmail/api/reference/rest/v1/users.messages`;
const draft = `https://developers.google.com/gmail/api/reference/rest/v1/users.drafts`;
const labels = `https://developers.google.com/gmail/api/reference/rest/v1/users.labels`;
const reactUrl = `https://reactjs.org/`;

const dataGrid =
  "https://ej2.syncfusion.com/demos/#/material/grid/grid-overview.html";
const jasmine = "https://jasmine.github.io/";
const iframes =
  "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe";
const memoryManagement =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management";
const garbageCollection =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection";
const typescript = "https://www.typescriptlang.org/";

const mvc = "https://dotnet.microsoft.com/apps/aspnet/mvc";
const core = "https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core";
const blazor = "https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor";
const odata = "https://www.odata.org/";
const webApi = "https://dotnet.microsoft.com/apps/aspnet/apis";

const mernStack = "https://www.mongodb.com/mern-stack";
const firebase = "https://firebase.google.com/";
const mongoDb = "https://www.mongodb.com/";

const infosys = "https://www.infosys.com/";
const university = "https://hindustanuniv.ac.in/";
const place = "https://en.wikipedia.org/wiki/Chennai";

const fastFingers = "https://fastfingers-logesh.netlify.app/";
const ffGithub =
  "https://github.com/pesto-students/fast-fingers-b04-logesh2496";

const monopoly = "https://monopoly-logesh.netlify.app/";
const mmGithub = "https://github.com/pesto-students/monopoly-logesh2496";

export const ReactContent = () => (
  <ContentWrapper>
    <UlWrapper>
      <Header>React</Header>
      <li>
        Developed a purely client based email-client with the help of{" "}
        <Anchor href={gmailRestApi}>gmail REST api</Anchor>.
      </li>
      <li>
        Done performance comparison between client side databases like{" "}
        <Anchor href={webSql}>WebSql</Anchor> and{" "}
        <Anchor href={indexedDb}>IndexedDB</Anchor> with a real gmail user’s
        messages and provided performance metrics like storage limits, no of
        records insertion per request to DB, joins and search by indexing. It
        involves operations such as CRUD, bulk emails syncing from gmail and
        keyword searching.
      </li>
      <li>
        Used <Anchor href={gmailRestApi}>gmail REST api</Anchor> for features
        like <Anchor href={emailCompose}>Email composing</Anchor>,{" "}
        <Anchor href={draft}>Drafting</Anchor> and handling{" "}
        <Anchor href={labels}>Labels</Anchor> using{" "}
        <Anchor href={reactUrl}>React</Anchor> libraries.
      </li>
      <Header>Project</Header>
      <div>
        Fast Fingers
        <div>
          <Anchor href={fastFingers}>Game</Anchor> |{" "}
          <Anchor href={ffGithub}>Github</Anchor>
        </div>
      </div>
    </UlWrapper>
  </ContentWrapper>
);
export const JsContent = () => (
  <ContentWrapper>
    <UlWrapper>
      <Header>HTML, CSS &amp; JS</Header>
      <li>
        Worked on a{" "}
        <Anchor href={dataGrid} target="_blank">
          DataGrid
        </Anchor>
        , a feature rich(20+) UI component which has support in 8 different
        technologies like JavaScript, TypeScript, React, Angular, Vue, ASP.NET
        Core, MVC and Blazor.
      </li>
      <li>
        Handled customer queries and needs in various platforms and was
        recognized for helping out 100+ incidents and forums in a month.
      </li>
      <li>
        Improved 1800+ unit test cases(
        <Anchor href={jasmine}>jasmine</Anchor> library) performance by moving
        the DOM involved test cases into dynamic{" "}
        <Anchor href={iframes}>IFrames</Anchor> and ensured{" "}
        <Anchor href={memoryManagement}>memory management</Anchor>(
        <Anchor href={garbageCollection}>garbage collection</Anchor>) for every
        test case in <Anchor href={typescript}>TypeScript</Anchor>.
      </li>
      <div>
        <Header>Project</Header>
        Monopoly
        <div>
          <Anchor href={monopoly}>Game</Anchor> |{" "}
          <Anchor href={mmGithub}>Github</Anchor>
        </div>
      </div>
    </UlWrapper>
  </ContentWrapper>
);
export const AspContent = () => (
  <ContentWrapper>
    <UlWrapper>
      <Header>ASP.Net</Header>
      <li>
        Worked on <Anchor href={mvc}>ASP.Net MVC</Anchor>,{" "}
        <Anchor href={core}>ASP.Net Core</Anchor> and{" "}
        <Anchor href={blazor}>Blazor</Anchor> the latest stack from microsoft.
      </li>
      <li>
        Have around 1 year of experience in <Anchor href={mvc}>C#</Anchor>{" "}
        language. Worked with various REST api like Web Adaptor,{" "}
        <Anchor href={odata}>OData(v3, v4)</Anchor>,{" "}
        <Anchor href={webApi}>WebApi</Anchor>.
      </li>
      <li>
        Provided framework support to DataGrid component in Blazor framework
        within a period of 2 months. This development process took place before
        the blazor's stable build was published. It kept us upto date with
        microsoft's version releases and make changes if necessary.
      </li>
    </UlWrapper>
  </ContentWrapper>
);
export const OtherContent = () => (
  <ContentWrapper>
    <UlWrapper>
      <Header>Other Learnings</Header>
      <li>
        Have completed a certification course in{" "}
        <Anchor href={mernStack}>MERN</Anchor> stack.
      </li>
      <li>
        Developed a simple SignUp and SignIn work flow. User credentials are
        stored in <Anchor href={mongoDb}>MongoDB</Anchor> with irreversible
        password hasing.
      </li>
      <li>
        Worked with <Anchor href={firebase}>Firebase</Anchor> DB for using
        realtime database and google, facebook user authentication in an
        e-commerce site.
      </li>
    </UlWrapper>
  </ContentWrapper>
);

const PitchWrapper = styled.div`
  max-height: inherit;
  overflow-y: auto;

  margin-top: 15px;
  font-family: Roboto Mono;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  text-align: center;
`;
export const ElevatorPitch = () => (
  <PitchWrapper>
    Enthusiastic wep developer with 2+ years of experience in Javscript,
    AngularJs, ASP.NET frameworks and ReactJs. Passionate to became a full stack
    developer.
    <div>
      <div>
        Web Dev at <Anchor href={infosys}>Infosys</Anchor>
      </div>
      <div>
        B.Tech graduate at{" "}
        <Anchor href={university}>Hindustan University</Anchor>
      </div>
      <div>
        Location <Anchor href={place}>Chennai</Anchor>
      </div>
    </div>
  </PitchWrapper>
);
