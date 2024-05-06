// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cqk25K8CLoCEb3zRi62xhx
// Component: hcK8YrW1YE5l
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  renderPlasmicSlot,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: cqk25K8CLoCEb3zRi62xhx/projectcss
import sty from "./PlasmicTeamWraper.module.css"; // plasmic-import: hcK8YrW1YE5l/css
import woman2773007640JpgCx3LZ5Eocnkv from "./images/woman2773007640Jpg.jpg"; // plasmic-import: cx3lZ5Eocnkv/picture

createPlasmicElementProxy;

export const PlasmicTeamWraper__VariantProps = new Array();

export const PlasmicTeamWraper__ArgProps = new Array("children", "slot");

const $$ = {};

function PlasmicTeamWraper__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link__fmFlt)}
          platform={"react"}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___4Mzt)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                link={"/Agents-single"}
                loading={"lazy"}
                src={{
                  src: woman2773007640JpgCx3LZ5Eocnkv,
                  fullWidth: 640,
                  fullHeight: 430,
                  aspectRatio: undefined
                }}
              />
            ),

            value: args.children
          })}
        </PlasmicLink__>
        <Stack__
          as={PlasmicLink__}
          hasGap={true}
          className={classNames(projectcss.all, projectcss.a, sty.link___6N9Qg)}
          platform={"react"}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <h4
                  className={classNames(
                    projectcss.all,
                    projectcss.h4,
                    projectcss.__wab_text,
                    sty.h4__wm08Q
                  )}
                >
                  {"Doi lorem Name"}
                </h4>
                <div className={classNames(projectcss.all, sty.freeBox__tPpdi)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___85PmH
                    )}
                  >
                    {"Company  Name"}
                  </div>
                </div>
              </React.Fragment>
            ),

            value: args.slot
          })}
        </Stack__>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeamWraper__ArgProps,
          internalVariantPropNames: PlasmicTeamWraper__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeamWraper__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamWraper";
  } else {
    func.displayName = `PlasmicTeamWraper.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamWraper = Object.assign(
  // Top-level PlasmicTeamWraper renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicTeamWraper
    internalVariantProps: PlasmicTeamWraper__VariantProps,
    internalArgProps: PlasmicTeamWraper__ArgProps
  }
);

export default PlasmicTeamWraper;
/* prettier-ignore-end */