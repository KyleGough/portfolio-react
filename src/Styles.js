const useStyles = theme => ({
  root: {
    padding: "3em 4em 3em 4em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 2em 1em 2em",
    },
  },
  title: {
    marginTop: "1em",
    marginBottom: "1em",      
  },
  subtitle: {
    marginTop: "1em",
    marginBottom: "1em",        
  },
  subsubtitle: {
    display: "block",
    paddingTop: "2em"
  },
  section: {
    paddingBottom: "2em",
    paddingTop: "2em",
    fontSize: "15px",
    fontFamily: theme.font.primary
  },
  ul: {
    paddingLeft: 0,
    "& > li": {
      listStyleType: "square!important",
      listStylePosition: "inside",
    }
  },
  link: {
    color: theme.palette.link,
    transitionDelay: "0.1s",
    transitionDuration: "0.2s",
    transitionProperty: "all",
    transitionTimingFunction: "ease",
    "&:hover": {
      color: theme.palette.linkHover
    },
    whiteSpace: "nowrap",
  },
});

export default useStyles;