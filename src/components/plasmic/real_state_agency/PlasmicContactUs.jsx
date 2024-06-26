// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cqk25K8CLoCEb3zRi62xhx
// Component: qpmi57wsmC5j
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import Header from "../../Header"; // plasmic-import: WXD7ODgB7HmJ/component
import Footer from "../../Footer"; // plasmic-import: aANL8FUm5Gu7/component
import { useScreenVariants as useScreenVariantsirgN65KfHbzG } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: irgN65kfHbzG/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: cqk25K8CLoCEb3zRi62xhx/projectcss
import sty from "./PlasmicContactUs.module.css"; // plasmic-import: qpmi57wsmC5j/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GvR_m76KYdCJ/icon
import realstateConatctUsjpgNgoSrRey6PfT from "./images/realstateConatctUsjpg.jpg"; // plasmic-import: ngoSRRey6pfT/picture

createPlasmicElementProxy;

export const PlasmicContactUs__VariantProps = new Array();

export const PlasmicContactUs__ArgProps = new Array();

const $$ = {};

function PlasmicContactUs__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsirgN65KfHbzG()
  });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9Enpi)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mu6Jx)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__azq9E)}>
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
                      src: realstateConatctUsjpgNgoSrRey6PfT,
                      fullWidth: 1920,
                      fullHeight: 1275,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__ou1Ue)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qfq2E)}
                  >
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
                        sty.text___1LePb
                      )}
                    >
                      {
                        "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient."
                      }
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__xhOcd)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___6S9S4
                        )}
                      >
                        <input
                          className={classNames(
                            projectcss.all,
                            projectcss.input,
                            sty.textInput__ayQs6
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
                            sty.textInput__x3DS
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
                          sty.textInput__phbuA
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
                          sty.textInput__eOKgY
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
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          sty.link
                        )}
                        platform={"react"}
                      >
                        {false ? (
                          <IconIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__v2H7C
                            )}
                            role={"img"}
                          />
                        ) : null}
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vLOjP
                          )}
                        >
                          {"Send"}
                        </div>
                        {false ? (
                          <IconIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___3XQx
                            )}
                            role={"img"}
                          />
                        ) : null}
                      </Stack__>
                    </div>
                  </Stack__>
                </div>
              </Stack__>
            </div>
          </Stack__>
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "columns",
    "img",
    "h2",
    "textarea",
    "link",
    "footer"
  ],

  header: ["header"],
  columns: ["columns", "img", "h2", "textarea", "link"],
  img: ["img"],
  h2: ["h2"],
  textarea: ["textarea"],
  link: ["link"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContactUs__ArgProps,
          internalVariantPropNames: PlasmicContactUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactUs";
  } else {
    func.displayName = `PlasmicContactUs.${nodeName}`;
  }
  return func;
}

export const PlasmicContactUs = Object.assign(
  // Top-level PlasmicContactUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    h2: makeNodeComponent("h2"),
    textarea: makeNodeComponent("textarea"),
    link: makeNodeComponent("link"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicContactUs
    internalVariantProps: PlasmicContactUs__VariantProps,
    internalArgProps: PlasmicContactUs__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactUs;
/* prettier-ignore-end */
