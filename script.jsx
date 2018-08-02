class Board extends React.Component {
    constructor(){
      super()
    }

    state = {
      board: [
        ['','',''],
        ['','',''],
        ['','','']
      ]
    }

    render() {
        console.log("board", this.state.board);
        const board = this.state.board.map( (row,rowIndex) => {
          const rows = row.map( (col,colIndex) => {
            return (
                    <span>{col} : {rowIndex}</span>
            );

          });
          return (
            <div className="row">
              {rows}
            </div>

          );

        });

        return (
          <div className="item">
            {board}
          </div>
        );
    }
}

class Play extends React.Component {

  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event, colIndex) => {
    // access to event.target here
    console.log(event);
  }

  // our click method
  handleClick(){
    
  }

  render() {
      return (
        <button type="checkbox" onClick={((ev) => this.handleClick(ev, colIndex))}>
            X
        </button>
      );
  }
}

ReactDOM.render(
    <Board/>,
    document.getElementById('root')
);
