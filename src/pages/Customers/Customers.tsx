import { SyntheticEvent, useState } from "react";
import Heading from "../../components/Heading";
import { PaginationItem } from '@mui/material';
import { Button, InputAdornment, OutlinedInput, Pagination } from '@mui/material';
import { ArrowLeft, ArrowRight, DocumentSVG, SearchSVG } from "../../components/SVGs/CustomSVGs";
import CampaignsTable from "./CampaignsTable";
import CampaignCreation from "./CampaignCreation";
import { AntTab, AntTabs, paginationStyles } from "./Styles";


export type Target = "All customers" | "Some customers" | "Owners"
export type CampaignData = {
  title: string,
  description: string,
  target: Target,
  status: string
}

const Customers = () => {
  const [tab, setTab] = useState(1);
  const [open, setOpen] = useState(false)
  const pageSize = 5
  const [campaigns, setCampaigns] = useState<CampaignData[]>([])
  const [paginatedCampaignsData, setPaginatedCampaignsData] = useState<CampaignData[]>(campaigns.slice(0, pageSize))
  const [page, setPage] = useState(1)

  // @ts-ignore
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  // For handling possible pagination
  // @ts-ignore
  const handlePageOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
    const start = (page - 1) * pageSize
    const end = start + pageSize
    // Set slice based on start and end variables
    setPaginatedCampaignsData(campaigns.slice(start, end))
  }

  const createCampaign = (data: CampaignData) => {
    const allCampaigns = [data, ...campaigns]
    setCampaigns(allCampaigns)
    setPaginatedCampaignsData(allCampaigns.slice(0, pageSize))
  }

  // Calculate total number of pages
  let pageCount;
  if (campaigns.length % pageSize === 0)
    pageCount =  campaigns.length / pageSize
  else {
    pageCount = Math.floor(campaigns.length / pageSize) + 1
  } 

  return (
    <section className="h-[88vh] px-4 borderr border-red-400 overflow-y-scroll sm:px-20">
      <Heading
        heading="Customers"
        subText="See all your customers in one place"
      />
      <div className="mt-2 w-full border-b border-[#c2c3c3]">
        <AntTabs
          variant="scrollable"
          centered
          value={tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <AntTab disabled label="Customer Log"/>
          <AntTab label="Campaigns" />
        </AntTabs>
      </div>
      <section className="borderr border-red-500 h-[61.5vh] sm:h-[60vh]">
        <div className="borderr-2 my-2 searchbar flex flex-col-reverse items-center gap-2 justify-between flex-wrap borrder-2 sm:flex-row sm:my-4">
          <div className="search flex gap-2 borderr-2 border-red-700 w-full sm:basis-[50%]">
            <OutlinedInput className="input-field !rounded-[6px] h-[38px] w-full md:basis-[80%] sm:h-[45px]" type="text" placeholder="Search customer log by customer name, email address & phone number"
              startAdornment={<InputAdornment position="start"><SearchSVG /></InputAdornment>}              
            />
            <Button variant="outlined" className="basis-[20%] !border-[.1em] !border-[#004741] !text-[#004741] !rounded-[6px] text-[14px] !hidden md:!flex"><p className="font-semibold">Search</p></Button>
          </div>
          <div className="h-[38px] w-full sm:w-fit sm:h-[45px]">
            <Button variant="contained" startIcon={<DocumentSVG />}
            onClick={() => setOpen(true)}
            className="!bg-[#004741] !text-white !rounded-[6px] text-[14px] !h-full !w-full">
              <p className="font-semibold">Create a campaign</p>
            </Button>
          </div>
        </div>
        <div className="relative h-[55vh] flex flex-col gap-4">
          <div className="h-[45vh] overflow-y-scroll">
            <CampaignsTable data={paginatedCampaignsData}/>
          </div>
          <div className="h-[8vh]">
            {
              campaigns.length > 0 && 
              <Pagination 
                className="absolute right-0"
                sx={paginationStyles}
                onChange={handlePageOnChange}
                count={pageCount}
                page={page}
                defaultPage={1}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowLeft, next: ArrowRight }}
                    {...item}
                  />
                )}
              />
            }
          </div>
        </div>
      </section>
      <CampaignCreation
        open={open}
        setOpen={setOpen}
        createCampaign={createCampaign}
      />
    </section>
  );
};

export default Customers;
