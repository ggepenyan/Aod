const Tabs = (props) =>
  <div className="tabs d-flex flex-wrap">
    {props.tabs.map(tab =>
      <a href="#" className={`tab main-link ${tab.active}`}>{tab.name}</a>
    )}
  </div>
