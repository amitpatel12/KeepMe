import React, { useState } from "react";


const Category = ({ setFilter, count }) => {
  // console.log(count)

  const [show, setShow] = useState(true)
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
    <div className="container category">
      <div className="sidebox" onClick={() => setFilter("all")}>
        <div className="color" style={{ backgroundColor: color[6] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">All Notes</div>
          <div className="count" style={{ backgroundColor: color[6]}}>
            {count.all <9 ? "0" + count.all : count.all}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Video")}>
        <div className="color" style={{ backgroundColor: color[0] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">Video</div>
          <div className="count" style={{ backgroundColor: color[0] }}>
          {count.Video <9 ? "0" + count.Video : count.Video}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Wishlist")}>
        <div className="color" style={{ backgroundColor: color[1] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">Wishlist</div>
          <div className="count" style={{ backgroundColor: color[1] }}>
          {count.Wishlist <9 ? "0" + count.Wishlist : count.Wishlist}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Assignment")}>
        <div className="color" style={{ backgroundColor: color[2] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">Assignment</div>
          <div className="count" style={{ backgroundColor: color[2] }}>
          {count.Assignment <9 ? "0" + count.Assignment : count.Assignment}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Project")}>
        <div className="color" style={{ backgroundColor: color[3] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">Projects</div>
          <div className="count" style={{ backgroundColor: color[3] }}>
          {count.Projects <9 ? "0" + count.Projects : count.Projects}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Work")}>
        <div className="color" style={{ backgroundColor: color[4] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">Work</div>
          <div className="count" style={{ backgroundColor: color[4] }}>
          {count.Work <9 ? "0" + count.Work : count.Work}
          </div>
        </div>
      </div>

      <div className="sidebox" onClick={() => setFilter("Study")}>
        <div className="color" style={{ backgroundColor: color[5] }}></div>
        <div className="sideboxitem">
          <div className="sideboxtitle">Study</div>
          <div className="count" style={{ backgroundColor: color[5] }}>
          {count.Study <9 ? "0" + count.Study : count.Study}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
