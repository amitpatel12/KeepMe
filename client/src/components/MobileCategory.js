import React, {useState} from 'react'





const MobileCategory = ({ setFilter, count,handleMobileshow}) => {
  // const [show, setShow] = useState(true)

  const color = [
    "#d60707",
    "#07d6bc",
    "#eec108",
    "#ee08db",
    "#075fd6",
    "#646669",
    "#FFC0CB"
  ];


  return (
    <div className='mobile' onClick={handleMobileshow}>
    <div className='mobile-category'>
    <div className="sidebox" onClick={() => setFilter("all")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">All Notes</div>
          <div className="count" style={{ backgroundColor: color[6]}}>
          {count.all <9 ? "0" + count.all : count.all}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Video")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">Video</div>
          <div className="count" style={{ backgroundColor: color[0] }}>
          {count.Video <9 ? "0" + count.Video : count.Video}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Wishlist")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">Wishlist</div>
          <div className="count" style={{ backgroundColor: color[1] }}>
          {count.Wishlist <9 ? "0" + count.Wishlist : count.Wishlist}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Assignment")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">Assignment</div>
          <div className="count" style={{ backgroundColor: color[2] }}>
          {count.Assignment <9 ? "0" + count.Assignment : count.Assignment}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Project")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">Projects</div>
          <div className="count" style={{ backgroundColor: color[3] }}>
          {count.Projects <9 ? "0" + count.Projects : count.Projects}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Work")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">Work</div>
          <div className="count" style={{ backgroundColor: color[4] }}>
          {count.Work <9 ? "0" + count.Work : count.Work}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Study")}>
        <div className="sideboxitem">
          <div className="sideboxtitle">Study</div>
          <div className="count" style={{ backgroundColor: color[5] }}>
          {count.Study <9 ? "0" + count.Study : count.Study}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MobileCategory
