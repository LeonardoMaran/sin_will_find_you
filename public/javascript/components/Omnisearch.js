// APP > MAIN > # [ SEARCH FORM ]

class Omnisearch extends React.Component {
    render() {
        return (

            <form onSubmit={this.props.omnisearchQuery}>
                <label htmlFor="userQuery">Search</label>
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    placeholder="What are you looking for?"
                    value={this.props.userQuery}
                    className="field-query"
                    id="userQuery" />
                <input type="submit" value="Search" className="search-button" />
            </form>

        )
    }
}