// example of class based component instead of using React Hooks
import React, { Component } from 'react';

class AccordionClassBased extends Component {
  state = {
    activeIndex: 0,
  };

  onTitleClicked = index => {
    this.setState({ activeIndex: index });
  };

  render() {
    const renderedItems = this.props.items.map((item, index) => {
      return (
        <React.Fragment key={item.title}>
          <div
            className="title active"
            onClick={() => this.onTitleClicked(index)}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });

    return <div className="ui styled accordion">{renderedItems}</div>;
  }
}

export default AccordionClassBased;
