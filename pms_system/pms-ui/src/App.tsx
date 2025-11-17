import { customComponents } from "./index";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ComponentList } from "./components/helper/component-list";
import { FrappePreviewWrapper } from "./components/helper/frappe-preview-wrapper";
import { SimulateFrappeEnv } from "./simulate-frappe";

const renderComponent = (component: typeof customComponents[number]) => {
  return <SimulateFrappeEnv component={component}>
    <Link
      to={'/'}
      className='ef-inline-block ef-ml-2 ef-mt-2 ef-border-gray-500 ef-px-1 ef-border ef-rounded'
    >
      Open All Components
    </Link>
    <FrappePreviewWrapper>
      <component.tag />
    </FrappePreviewWrapper>
    {component.renderInReact &&
      <FrappePreviewWrapper>
        <component.element />
      </FrappePreviewWrapper>}
  </SimulateFrappeEnv>
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {customComponents.map(cc => {
          return <Route
            path={cc.tag}
            key={cc.tag}
            element={
              renderComponent(cc)
            }
          />;
        })}
        <Route element={<ComponentList />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
