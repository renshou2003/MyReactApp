import React from "react";
import {Button} from "antd"

export default class Dashboard extends React.Component {
  render() {
    return <div>
      <Button type="primary" icon="up">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    </div>;
  }
}
