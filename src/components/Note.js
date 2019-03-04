import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props.item.id);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class Note extends Component {

  render() {
    const { isDragging, connectDragSource, note } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource (
        <div className="note" style={{opacity}}>
            {this.props.text}
        </div>
    );
  }
}

export default DragSource ('Note', itemSource, collect)(Note);
