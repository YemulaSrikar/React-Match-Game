import './index.css'

const TabItem = props => {
  const {TabDetails, clickTab, isActive} = props
  const {tabId, displayText} = TabDetails

  const underline = isActive ? 'underline-tabs' : 'tabs-names'

  const onToggleTab = () => {
    clickTab(tabId)
  }

  return (
    <li className="tabs-list-container">
      <button type="button" className="display-button" onClick={onToggleTab}>
        <p className={underline}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
