// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cqk25K8CLoCEb3zRi62xhx
// Component: WXD7ODgB7HmJ
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  useCurrentUser,
  useTrigger
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsirgN65KfHbzG } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: irgN65kfHbzG/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: cqk25K8CLoCEb3zRi62xhx/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: WXD7ODgB7HmJ/css
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: GvR_m76KYdCJ/icon
import imageHnOii2J2NFtB from "./images/image.png"; // plasmic-import: HnOII2j2nFtB/picture

createPlasmicElementProxy;

export const PlasmicHeader__VariantProps = new Array();

export const PlasmicHeader__ArgProps = new Array();

const $$ = {};

function PlasmicHeader__RenderFunc(props) {
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
  const [isN3400875Hover, triggerN3400875HoverProps] = useTrigger(
    "useHover",
    {}
  );
  const triggers = {
    hover_3400875: isN3400875Hover
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsirgN65KfHbzG()
  });
  return (
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
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__wQnlu)}
      >
        <PlasmicLink__
          className={classNames(projectcss.all, projectcss.a, sty.link__byspN)}
          href={`/`}
          platform={"react"}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"50px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"50px"}
            src={{
              src: imageHnOii2J2NFtB,
              fullWidth: 750,
              fullHeight: 750,
              aspectRatio: undefined
            }}
          />
        </PlasmicLink__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vgQfn)}
        >
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__udu8Z
            )}
            platform={"react"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__sVslj)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lgBxJ
              )}
            >
              {"HOME"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__zdXhZ)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__wFQc)}
            platform={"react"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__bS7Fq)}
                role={"img"}
              />
            ) : null}
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__ddyu)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__zuauf
            )}
            href={`/contact-us`}
            platform={"react"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__z3EMh)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bowuD
              )}
              data-plasmic-trigger-props={[triggerN3400875HoverProps]}
            >
              {triggers.hover_3400875 ? "Contact" : "Contact"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__apAt1)}
                role={"img"}
              />
            ) : null}
          </Stack__>
          <Stack__
            as={PlasmicLink__}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__weGlp
            )}
            href={"tel:+4733378901"}
            platform={"react"}
            target={"_blank"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__kkNwm)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__aAyI
              )}
            >
              {"SIGN IN"}
            </div>
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__uX0Ch)}
                role={"img"}
              />
            ) : null}
          </Stack__>
        </Stack__>
      </Stack__>
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
