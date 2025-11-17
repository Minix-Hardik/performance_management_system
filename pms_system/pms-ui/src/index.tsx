import * as frappeComponents from './frappe'
import reactToWebComponent from 'react-to-webcomponent';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { FrappeComponent } from "./components/helper/frappe-compenent";

export const customComponents = Object.keys(frappeComponents)
  .map(el => frappeComponents[el as keyof typeof frappeComponents])
  .filter(el => el.component)
  .map(E => {
    const Component = (props: any) => {
      return (
        <FrappeComponent {...props}>
          <E />
        </FrappeComponent>
      );
    };
    if (!customElements.get(E.component))
      customElements.define(
        E.component,
        reactToWebComponent(Component, React, ReactDOM)
      );
    return {
      element: Component,
      simulator: "simulator" in E ? (E.simulator as Record<string, string>) : undefined,
      renderInReact: "renderInReact" in E ? (E.renderInReact as boolean) : undefined,
      tag: E.component
    }
  }).filter(Boolean);
