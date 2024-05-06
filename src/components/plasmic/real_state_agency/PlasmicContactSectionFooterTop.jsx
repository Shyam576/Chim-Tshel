// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cqk25K8CLoCEb3zRi62xhx
// Component: DoZzMN57XJOO
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: cqk25K8CLoCEb3zRi62xhx/projectcss
import sty from "./PlasmicContactSectionFooterTop.module.css"; // plasmic-import: DoZzMN57XJOO/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GvR_m76KYdCJ/icon
import map27890521920Jpg3IAugzJJereV from "./images/map27890521920Jpg.jpg"; // plasmic-import: 3iAugzJJereV/picture

createPlasmicElementProxy;

export const PlasmicContactSectionFooterTop__VariantProps = new Array();

export const PlasmicContactSectionFooterTop__ArgProps = new Array();

const $$ = {};

function PlasmicContactSectionFooterTop__RenderFunc(props) {
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
      <Stack__
        as={"div"}
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        hasGap={true}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__z3Anr)}>
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"100%"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: map27890521920Jpg3IAugzJJereV,
              fullWidth: 1920,
              fullHeight: 1280,
              aspectRatio: undefined
            }}
          />
        </div>
        <div className={classNames(projectcss.all, sty.column___3Bwyq)}>
          <h2
            data-plasmic-name={"h2"}
            data-plasmic-override={overrides.h2}
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2
            )}
          >
            {"Get in touch."}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kubhO
            )}
          >
            {
              "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
            }
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__wZhje)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__qiV8T)}
            >
              <input
                className={classNames(
                  projectcss.all,
                  projectcss.input,
                  sty.textInput__djXbO
                )}
                placeholder={"First Name"}
                size={1}
                type={"text"}
                value={""}
              />

              <input
                className={classNames(
                  projectcss.all,
                  projectcss.input,
                  sty.textInput__lkrA2
                )}
                placeholder={"Last Name"}
                size={1}
                type={"text"}
                value={""}
              />
            </Stack__>
            <input
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.textInput__yClyi
              )}
              placeholder={"Email address"}
              size={1}
              type={"text"}
              value={""}
            />

            <input
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.textInput__g86
              )}
              placeholder={"Phone number"}
              size={1}
              type={"text"}
              value={""}
            />

            <textarea
              data-plasmic-name={"textarea"}
              data-plasmic-override={overrides.textarea}
              className={classNames(
                projectcss.all,
                projectcss.textarea,
                sty.textarea
              )}
              placeholder={"Message"}
              value={""}
            />

            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              platform={"react"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__p4Z5I)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uYhei
                )}
              >
                {"Send"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__hZtzQ)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </div>
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "img", "h2", "textarea", "link"],
  columns: ["columns", "img", "h2", "textarea", "link"],
  img: ["img"],
  h2: ["h2"],
  textarea: ["textarea"],
  link: ["link"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactSectionFooterTop__ArgProps,
          internalVariantPropNames: PlasmicContactSectionFooterTop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactSectionFooterTop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactSectionFooterTop";
  } else {
    func.displayName = `PlasmicContactSectionFooterTop.${nodeName}`;
  }
  return func;
}

export const PlasmicContactSectionFooterTop = Object.assign(
  // Top-level PlasmicContactSectionFooterTop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h2: makeNodeComponent("h2"),
    textarea: makeNodeComponent("textarea"),
    link: makeNodeComponent("link"),
    // Metadata about props expected for PlasmicContactSectionFooterTop
    internalVariantProps: PlasmicContactSectionFooterTop__VariantProps,
    internalArgProps: PlasmicContactSectionFooterTop__ArgProps
  }
);

export default PlasmicContactSectionFooterTop;
/* prettier-ignore-end */