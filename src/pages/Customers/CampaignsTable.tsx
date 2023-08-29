import { FC } from "react"
import { CampaignData } from "./Customers"
  import "../../components/Table/Table.css"

type CampaignsTableProps = {
  data: CampaignData[]
}

const CampaignsTable:FC<CampaignsTableProps> = ({ data }) => {
  return (
    <table>
        {/* <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup> */}
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Campaign Title</th>
          <th className="text-left">Description</th>
          <th>Target Group</th>
          <th>Campaign Status</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, i) => {
            return (
              <tr key={i}>
                <td style={{ textAlign: "left" }}><p>{item.title}</p></td>
                <td className="text-left"><p>{item.description}</p></td>
                <td><p>{item.target}</p></td>
                <td><p>Active</p></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default CampaignsTable