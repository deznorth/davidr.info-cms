import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ProfBioEditor.scss';

//Actions
import { fetchProfBio } from '../../../../../redux/actions/metaActions';

class ProfBioEditor extends Component{

    state = {
        loadedImg: '',
        imgUrl: '',
        title: '',
        body: ''
    }
  
    componentDidMount(){
        this.props.fetchProfBio();
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                loadedImg: this.props.imgUrl,
                imgUrl: this.props.imgUrl,
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

    handleImgUpdate = () => {
        this.setState({
            loadedImg: this.state.imgUrl
        });
    }

    handleReset = (e) => {
        this.setState({
            loadedImg: this.props.imgUrl,
            imgUrl: this.props.imgUrl,
            title: this.props.title,
            body: this.props.body
        });
        e.preventDefault();
    }

    handleSave = (e) => {
        
        e.preventDefault();
    }

    render(){
        return (
            <div className="ProfBioEditor bg-glass">
                <h2>Professional Bio</h2>
                <div className="formWrapper">
                    <img src={this.state.loadedImg} alt="profile"/>
                    <form onSubmit={this.handleSave} className="inputsWrapper">
                        <input onChange={this.handleChange} type="text" name="title" placeholder="Title" value={this.state.title}/>
                        <input onBlur={this.handleImgUpdate} onChange={this.handleChange} type="text" name="imgUrl" placeholder="Image Url" value={this.state.imgUrl}/>
                        <textarea onChange={this.handleChange} name="body" placeholder="Professional Bio Content..." value={this.state.body}></textarea>
                        <button onClick={this.handleReset} className="resetBtn">Reset</button>
                        <input type="submit" value="Save"/>
                    </form>
                </div>
            </div>
        );
    }
}

ProfBioEditor.propTypes = {
    fetchProfBio: PropTypes.func.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
}

const mapStateToProps = state => ({
    imgUrl: state.meta.profBio.imgUrl,
    title: state.meta.profBio.title,
    body: state.meta.profBio.body
});

export default connect(mapStateToProps, { fetchProfBio })(ProfBioEditor);