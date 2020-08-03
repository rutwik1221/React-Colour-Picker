import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';
import {Select, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state={
            format:"hex",
            isOpen:false,
        };
        this.handleFormatChange=this.handleFormatChange.bind(this);
        this.closeSnackBar=this.closeSnackBar.bind(this);
    }
    handleFormatChange(e){
        this.setState({format:e.target.value,isOpen:true});
        this.props.handleFormatChange(e.target.value);
    }
    closeSnackBar(){
        this.setState({isOpen:false});
    }
    render(){
        return(
            <header className="navbar">
                <div className="logo">
                    <Link to="/">
                        Color Picker
                    </Link>
                </div>
                {this.props.showingAll && <div className="slider-container">
                    <span className="slider-span">
                        Level:{this.props.level}    
                    </span> 
                    <div className="slider">
                        <Slider 
                            defaultValue={this.props.level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel}
                        />
                    </div>
                </div>}
                <div  className="select-container">
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX -#ffffff</MenuItem>
                        <MenuItem value="rgb">RGB -rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA -rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical:"bottom",horizontal:"left"}}
                    open={this.state.isOpen}
                    autoHideDuration={3000}
        message={<span id='message-id'>Format Changed to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{
                       "aria-describedby":"message-id",
                    }
                    }
                    onClose={this.closeSnackBar}    
                    action={[
                        <IconButton onClick={this.closeSnackBar} color='inherit'>
                            <CloseIcon/>
                        </IconButton>
                    ]
                    }
                />
            </header>
        );
    }
}