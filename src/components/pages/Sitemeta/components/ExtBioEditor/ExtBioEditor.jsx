import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ExtBioEditor.scss';

//Actions
import { fetchExtBio, updateExtBio } from '../../../../../redux/actions/metaActions';

class ExtBioEditor extends Component{

    state = {
        title: '',
        body: ''
    }
  
    componentDidMount(){
        this.props.fetchExtBio();
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                title: this.props.title,
                body: this.props.body
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleReset = (e) => {
        this.setState({
            title: this.props.title,
            body: this.props.body
        });
        e.preventDefault();
    }

    handleSave = (e) => {
        const newProfBio = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.updateExtBio(newProfBio);
        e.preventDefault();
    }

    render(){
        return (
            <div className="ExtBioEditor bg-glass">
                <h2>Extra Bio</h2>
                <form onSubmit={this.handleSave} className="inputsWrapper">
                    <input onChange={this.handleChange} type="text" name="title" placeholder="Title" value={this.state.title}/>
                    <textarea onChange={this.handleChange} name="body" placeholder="Extra Bio Content..." value={this.state.body}></textarea>
                    <button onClick={this.handleReset} className="resetBtn">Reset</button>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        );
    }
}

ExtBioEditor.propTypes = {
    fetchExtBio: PropTypes.func.isRequired,
    updateExtBio: PropTypes.func.isRequired,
    title: PropTypes.string,
    body: PropTypes.string
}

const mapStateToProps = state => ({
    title: state.meta.extBio.title,
    body: state.meta.extBio.body
});

export default connect(mapStateToProps, { fetchExtBio, updateExtBio })(ExtBioEditor);