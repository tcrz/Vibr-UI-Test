const CampaignsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>Campaign Title</th>
          <th className="text-left">Description</th>
          <th style={{ textAlign: "left" }}>Target Group</th>
          <th>Campaign Status</th>
        </tr>
      </thead>
      <tbody>
        {
          [...Array(6).keys()].map(i => {
            return (
              <tr>
                <td style={{ textAlign: "left" }}><p>Mobile App updates coming soon</p></td>
                <td className="text-left"><p>Voice Campaign</p></td>
                <td style={{ textAlign: "left" }}><p>All Customers</p></td>
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