import React, { useState } from "react";
import { portfolioObj } from "./projectsTools";

export default function Tools() {
  const [tools, setTools] = useState(portfolioObj.tools);

  return (
    <div className="tools-wrapper">
      <h1 className="tools-heading">A Few Tools I Use</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => {
          return (
            <div className="tool" key={index}>
              <div className="title">
                <h1 className="h-expand">{tool.title}</h1>
              </div>

              <div className={`scale-tool ${tool.class}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
