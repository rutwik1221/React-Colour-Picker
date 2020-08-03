import React,{Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from "./Navbar";
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from "./Styles/PaletteStyles"


class Palette extends Component {
    constructor(props){
        super(props);
        this.state={
            level:500,
            format:"hex",
        };
        this.changeLevel=this.changeLevel.bind(this);
        this.changeFormat=this.changeFormat.bind(this);

    }
    changeLevel(newLevel){
        this.setState({level:newLevel});
    }
    changeFormat(val){
        this.setState({format:val});
    }
    render(){
        const {classes} = this.props;
        const {colors,id,paletteName} = this.props.palette;
        const {level,format} = this.state;
        const colorBoxes = colors[level].map(c => (
            <ColorBox 
                key={c.id} 
                background={c[format]} 
                name={c.name}
                id={c.id}
                paletteId={id}
                showingFullPalette ={true}
            />
        ));
        return(
            <div className={classes.Palette}>
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel} 
                    handleFormatChange={this.changeFormat}
                    showingAll={true}
                />
                <div className={classes.Colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter
                    paletteName={paletteName}
                />
            </div>
        )
    }
}
export default withStyles(styles)(Palette);