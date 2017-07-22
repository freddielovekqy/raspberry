class PageHeaderItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerItems: [
                {
                    label: '首页'
                }, {
                    label: '游戏'
                }
            ]
        };
    }

    render() {
        return (
            <div>
            {this.state.headerItems.map(item => (
                <div>{item.label}</div>
            ))}
            </div>
        )
    }
}

ReactDOM.render(
  <PageHeaderItems />,
  document.getElementById('headerItems')
);