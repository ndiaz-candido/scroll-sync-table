import React, { PureComponent } from 'react';
import ScrollableSection from './Sections/ScrollableSection';
import FlexyColumn from '../FlexyColumn';
import './FlexyRow.css';

class FlexyRow extends PureComponent {
  leftStickySection = [];
  rightStickySection = [];
  scrollableSection = [];

  componentWillMount() {
    this.props.columns.forEach((column) => {
      switch (column.stickyAlign) {
        case 'left': this.leftStickySection.push(column); break;
        case 'rigth': this.rightStickySection.push(column); break;
        default: this.scrollableSection.push(column); break;
      }
    });
  }

  render() {
    const {
      rowId,
      isHeader,
      isSticky,
      rowBeingScrolled,
      scrollLeft,
      onScroll
    } = this.props;

    const rowClasses = isSticky ? 'flexyRow sticky' : 'flexyRow';

    return (
      <div className={rowClasses}>
        <div className="leftStickySection">{ this.leftStickySection.map((columnProps) => <FlexyColumn {...columnProps} />) }</div>
        <ScrollableSection
          rowId={rowId}
          columns={this.scrollableSection}
          rowBeingScrolled={rowBeingScrolled}
          scrollLeft={scrollLeft}
          onScroll={onScroll}
        />
        <div className="rightStickySection">{ this.rightStickySection.map((columnProps) => <FlexyColumn {...columnProps} />) }</div>
      </div>
    );
  };
};

export default FlexyRow;