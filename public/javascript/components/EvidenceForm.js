// APP > MAIN > EVIDENCE > #

class EvidenceForm extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            location: '',
            age: '',
            notes: '',
            id: null
        }
    }

    // NEEDED TO REGISTER EVIDENCE
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    // ADD EVIDENCE
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleCreate(this.state)
        this.setState({
            name: '',
            location: '',
            age: '',
            notes: '',
        })
        this.props.triggerReload()
        this.setState({
            isEvidenceClosed: true
        })
    }

    componentDidMount() {
        this.setState({
            name: this.props.userInputs.name,
            location: this.props.userInputs.location,
            age: this.props.userInputs.age,
            notes: this.props.userInputs.notes,
            id: this.props.userInputs.id
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="evidence-form">
                <label>Name</label>
                <input
                    type="text"
                    className="field-name"
                    placeholder="Name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange} />

                <label>Location</label>
                <input
                    type="text"
                    className="field-location"
                    placeholder="Location"
                    id="location"
                    value={this.state.location}
                    onChange={this.handleChange} />

                <label>Age</label>
                <input
                    type="number"
                    className="field-age"
                    placeholder="Age"
                    id="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                />

                <label>Notes</label>
                <input
                    type="text"
                    className="field-notes"
                    placeholder="Notes"
                    id="notes"
                    onChange={this.handleChange}
                    value={this.state.notes} />


                <input type="submit" value="Enter Evidence" className="evidence-button" />
            </form>
        )
    }
}

