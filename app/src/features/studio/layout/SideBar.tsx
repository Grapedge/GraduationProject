import { Tab, Tabs } from '@mui/material'
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined'
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined'
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined'

export default function SideBar() {
  return (
    <Tabs orientation="vertical" value={1}>
      <Tab icon={<ApiOutlinedIcon />} />
      <Tab icon={<AltRouteOutlinedIcon />} />
      <Tab icon={<CodeOffOutlinedIcon />} />
      <Tab icon={<ShoppingBagOutlinedIcon />} />
      <Tab icon={<SettingsApplicationsOutlinedIcon />} />
    </Tabs>
  )
}
