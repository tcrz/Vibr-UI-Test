import { SyntheticEvent, useState } from "react";
import Heading from "../../components/Heading";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { PaginationItem, styled } from '@mui/material';
import { Button, InputAdornment, OutlinedInput, Pagination } from '@mui/material';
import { ArrowLeft, ArrowRight, DocumentSVG, SearchSVG } from "../../components/SVGs/CustomSVGs";
import "../../components/Table/Table.css"
import CampaignsTable from "./CampaignsTable";
import CampaignCreation from "./CampaignCreation";

const paginationStyles = {
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

const AntTabs = styled(Tabs)({
  // borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#00100B',
  },
  '& .MuiTab-root': {
    alignItems: "start",
  }
});

const AntTab = styled((props: { label:string }) => <Tab disableRipple {...props} />)(({ theme }) => ({
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

const Customers = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="h-[88vh] px-20 border border-red-400 overflow-y-scroll">
      <Heading
        heading="Customers"
        subText="See all your customers in one place"
      />
      <div className="mt-2 w-full border-b border-[#c2c3c3]">
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <AntTab label="Customer Log" />
          <AntTab label="Campaigns" />
        </AntTabs>
      </div>
      <section className="borderr border-red-500 h-[60vh]">
        <div className="my-4 searchbar flex items-center justify-between flex-wrap borrder-2">
          <div className="search flex basis-[50%] gap-2 borderr-2 border-red-700">
            <OutlinedInput className="input-field !rounded-[6px] h-[45px] basis-[80%]" type="text" placeholder="Search customer log by customer name, email address & phone number"
              startAdornment={<InputAdornment position="start"><SearchSVG /></InputAdornment>}              
            />
            <Button variant="outlined" className="basis-[20%] !border-[.1em] !border-[#004741] !text-[#004741] !rounded-[6px] text-[14px]"><p className="font-semibold">Search</p></Button>
          </div>
          <div className="h-[45px]">
            <Button variant="contained" startIcon={<DocumentSVG />}
            onClick={() => setOpen(true)}
            className="!bg-[#004741] !text-white !rounded-[6px] text-[14px] !h-full">
              <p className="font-semibold">Create a campaign</p>
            </Button>
          </div>
        </div>
        <div className="relative h-[55vh] flex flex-col gap-4">
          <div className="h-[45vh] overflow-y-scroll">
            <CampaignsTable />
          </div>
          <div className="h-[10vh]">
            <Pagination 
              className="absolute right-0"
              sx={paginationStyles}
              count={10}
              defaultPage={6}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowLeft, next: ArrowRight }}
                  {...item}
                />
              )}
            />
          </div>
        </div>
      </section>
      <CampaignCreation 
        open={open}
        setOpen={setOpen}
      />
    </section>
  );
};

export default Customers;
