import { Button, OutlinedInput } from "@mui/material";
import { Option, Select, Textarea } from "@mui/joy";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { ArrowDown, DocumentBlackSVG } from "../../components/SVGs/CustomSVGs";
import { CampaignData, Target } from "./Customers";

type CampaignCreationProps = {
  open: boolean;
  setOpen: (bool: boolean) => void;
  createCampaign: (data: CampaignData) => void;
};

const CampaignCreation: FC<CampaignCreationProps> = ({
  open,
  setOpen,
  createCampaign,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState<Target>("All customers");

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleDescriptionOnChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(event.target.value);

  // @ts-ignore
  const handleTargetOnChange = (event: SyntheticEvent | null, option: string | null) => {
    if (typeof option === "string") {
       setTarget(option as Target);
    }
   
  };

  // Closes modal and resets all inputs
  const handleModalClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setTarget("All customers");
  };

  const handleCampaignCreation = () => {
    createCampaign({ title, description, target, status: "Active" });
    // Close modal after creation
    handleModalClose();
  };

  const isButtonActive: boolean = title.trim().length > 0 && description.trim().length > 0;

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title="Create a campaign"
      icon={<DocumentBlackSVG />}
    >
      <form className="flex flex-col gap-4 w-full h-full bgg-red-500">
        <div>
          <label>Campaign Title</label>
          <OutlinedInput required
            value={title}
            onChange={handleTitleChange}
            className="input-field !rounded-[6px] h-[45px] w-full"
            type="text"
            placeholder="Write your campaign title here"
          />
        </div>
        <div>
          <label>Description</label>
          <Textarea required
            value={description}
            placeholder="Write your message here"
            variant="outlined"
            minRows={6}
            onChange={handleDescriptionOnChange}
          />
        </div>
        <div>
          <label>Target group</label>
          <Select
            defaultValue={target}
            indicator={<ArrowDown />}
            onChange={handleTargetOnChange}
          >
            <Option value="All customers">All customers</Option>
            <Option value="Some customers">Some customers</Option>
            <Option value="Owners">Owners</Option>
          </Select>
        </div>
        <div className="mt-4">
          <Button
            variant="contained"
            onClick={handleCampaignCreation}
            disabled={!isButtonActive}
            className={`!bg-[${
              isButtonActive ? "#004741" : "#89a5a3"
            }] !text-white !rounded-[6px] text-[14px] !h-[40px] w-full`}
          >
            Create your campaign
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CampaignCreation;
