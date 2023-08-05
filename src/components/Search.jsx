import React from "react";

class Search extends React.Component {
    state = {
        search: 'matrix',
        type: ''
    }

    handleKey = e => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleSelChange = e => {
        this.setState(() => ({type: e.target.value}), () => {
            this.props.searchMovies(this.state.search, this.state.type)
        })
    }

    render() {
        const { search, type } = this.state
        return (
            <>
                <div className="row">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            type="search"
                            value={search}
                            onChange={e => this.setState({search: e.target.value})}
                            onKeyDown={e => this.handleKey(e)}
                        />
                        <button className="btn search-btn" onClick={e => this.props.searchMovies(search, type)}>Search</button>
                    </div>
                </div>
                <div className="row">
                    <label>
                        <input
                            className="with-gap"
                            type="radio"
                            name="type"
                            value=''
                            checked={type === ''}
                            onChange={this.handleSelChange}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            type="radio"
                            name="type"
                            value='movie'
                            checked={type === 'movie'}
                            onChange={this.handleSelChange}
                        />
                        <span>Moves only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            type="radio"
                            name="type"
                            value='series'
                            checked={type === 'series'}
                            onChange={this.handleSelChange}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </>
        )
    }
}

export {Search}