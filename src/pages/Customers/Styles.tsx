import { Tab, Tabs, styled } from "@mui/material";

export const paginationStyles = {
  '& li button': {
      background: "white",
      color: "#004741",
      fontWeight: "500",
      lineHeight: "30px",
  },
  '& li button:hover': {
      backgroundColor: "#004741",
      border: "1px solid",
      color: "white"
  },
  '& .MuiPaginationItem-previousNext, & .MuiPaginationItem-firstLast, & .MuiPaginationItem-previousNext:hover': {
    background: "transparent",
    color: "#004741"
  },
  '& li button.Mui-selected, & li button.Mui-selected:hover': {
      backgroundColor: `#004741`,
      color:'white',
  },    
}

export const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#00100B',
  },
  '& .MuiTab-root': {
    alignItems: "start",
  }
});

export const AntTab = styled((props: any) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontSize: "1.05em",
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  // border: "1px solid red",
  // padding: "3px",
  color: '#808885',
  '&:hover': {
    color: '#00100B',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#00100B',
    fontWeight: 500,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));