import { table } from 'msteams-ui-styles-core/lib/components/table';
import * as React from 'react';
import { connectTeamsComponent, IInjectedTeamsProps } from '../index';

const TBodyInternal: React.StatelessComponent<IInjectedTeamsProps> = (props) => {
  const themeClassNames = table(props.context);
  return <tbody
    data-component-type="TBody"
    className={themeClassNames.tbody}>{props.children}</tbody>;
};

export const TBody = connectTeamsComponent<{}>(TBodyInternal);
