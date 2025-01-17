export default {
    Palette:{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    Colors:{
        height: "90%",
    },
    goBack:{
        width:          "20%",
        height:         "50%",
        margin:         "0 auto",
        display:        "inline-block",
        position:       "relative",
        cursor:         "pointer",
        marginBottom:   "-4px",
        opacity:        "1",
        backgroundColor:"black",
        "& a":{
            color:          "black",
            width:          "100px",
            height:         "30px",
            position:       "absolute",
            display:        "inline-block",
            top:            "50%",
            left:           "50%",
            marginLeft:     "-50px",
            marginTop:      "-15px",
            textAlign:      "center",
            outline:        "none",
            background:     "rgba(255,255,255,0.3)",
            border:         "none",
            textDecoration: "none",
        }
    },
}
