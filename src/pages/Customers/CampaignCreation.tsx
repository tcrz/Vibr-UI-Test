import { Button, OutlinedInput } from '@mui/material'
import { Option, Select, Textarea } from "@mui/joy"
import { FC } from 'react'
import Modal from '../../components/Modal/Modal'
import { ArrowDown, DocumentBlackSVG } from '../../components/SVGs/CustomSVGs'

type CampaignCreationProps = {
  open: boolean,
  setOpen: (bool: boolean) => void,
}

const CampaignCreation:FC<CampaignCreationProps> = ({open, setOpen}) => {
  return (
    <Modal open={open} setOpen={setOpen} title="Create a campaign" icon={<DocumentBlackSVG />}>
      <form className="flex flex-col gap-4 w-full h-full bgg-red-500">
        <div>
          <label>Campaign Title</label>
          <OutlinedInput
            className="input-field !rounded-[6px] h-[45px] w-full"
            type="text"
            placeholder="Write your campaign title here"
          />
        </div>
        <div>
          <label>Description</label>
          <Textarea placeholder="Write your message here" variant="outlined" minRows={6} />
        </div>
        <div>
          <label>Target group</label>
          <Select defaultValue="dog" indicator={<ArrowDown />}>
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
            <Option value="fish">Fish</Option>
            <Option value="bird">Bird</Option>
          </Select>
        </div>
        <div className="mt-4">
          <Button variant="contained"
            className="!bg-[#004741] !text-white !rounded-[6px] text-[14px] !h-[40px] w-full">
            Create your campaign
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default CampaignCreation