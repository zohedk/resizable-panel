import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Resizer } from "../Resizer";
import { ResizableLayoutProp } from "./ResizeableLayout";
export const VisiblePanel: React.FC<ResizableLayoutProp> = (prop) => {
  return (
    <>
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            {/* child one  */}
            <Panel {...{ minSize: 20 }} className="relative flex ">
              {/* rendring child one  data*/}

              <div className="absolute top-0 w-[100%] h-[100%]">
                {prop.child1}
              </div>

              {/* child one top resizer */}
              <div className="absolute top-0 left-0 w-[100%]">
                <Resizer direction="horizontal" />
              </div>
              {/* child one left resizer */}
              <div className="absolute left-0 top-0 h-[100%]">
                <Resizer direction="vertical" />
              </div>
            </Panel>
            {/* child one right and child two left resizer */}
            <PanelResizeHandle
              {...{ children: <Resizer direction="vertical" /> }}
            />
            {/* child two  */}
            <Panel
              {...{ minSize: 20 }}
              className="relative flex justify-center items-center "
            >
              {/* rendring child two data */}
              <div className="absolute top-0 w-[100%] h-[100%]">
                {prop.child2}
              </div>

              {/* child two top resizer */}
              <div className="absolute top-0 w-[100%]">
                <Resizer direction="horizontal" />
              </div>
              {/* child two right resizer */}
              <div className="absolute top-0 right-0 h-[100%]">
                <Resizer direction="vertical" />
              </div>
            </Panel>
          </PanelGroup>
        </Panel>
        {/* child three top  resizer */}
        <PanelResizeHandle
          {...{ children: <Resizer direction="horizontal" /> }}
        />
        {/*  child three  */}
        <Panel
          {...{ minSize: 20 }}
          className="relative flex justify-center items-center"
        >
          {/* rendring child three data*/}
          <div className="absolute top-0 w-[100%] h-[100%]">{prop.child3}</div>
          {/* child three left resizer */}
          <div className="absolute left-0 top-0 h-[100%]">
            <Resizer direction="vertical" />
          </div>
          {/* child three right resizer */}
          <div className="absolute right-0 top-0 h-[100%]">
            <Resizer direction="vertical" />
          </div>
        </Panel>
      </PanelGroup>
    </>
  );
};
