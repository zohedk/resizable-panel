import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { Resizer } from "../Resizer";
import { VisiblePanel } from "./VisiblePanel";

export interface ResizableLayoutProp {
  child1: React.ReactNode;
  child2: React.ReactNode;
  child3: React.ReactNode;
}

export const ResizeableLayout: React.FC<ResizableLayoutProp> = (prop) => {
  return (
    <PanelGroup direction="horizontal">
      <Panel {...{ defaultSize: 0 }} className="bg-white"></Panel>
      {/* left panel resizer */}
      <PanelResizeHandle />
      <Panel>
        <PanelGroup direction="vertical">
          <Panel {...{ defaultSize: 0 }} className="bg-white"></Panel>
          {/* top panel resizer  */}
          <PanelResizeHandle />
          <Panel className="">
            {/* this is the only panel group that is visible to user rest is all just for resizing */}
            <VisiblePanel {...{ ...prop }} />
          </Panel>
          {/* bottom panel resizer */}
          <PanelResizeHandle
            {...{ children: <Resizer direction="horizontal" /> }}
          />
          <Panel {...{ defaultSize: 0 }} className=" bg-white"></Panel>
        </PanelGroup>
      </Panel>
      {/* right panel resizer */}
      <PanelResizeHandle />
      <Panel {...{ defaultSize: 0 }} className="bg-white"></Panel>
    </PanelGroup>
  );
};
