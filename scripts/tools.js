
let jobs = [
  {
    id: "j1",
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    status: "NOT APPLIED",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
  },
  {
    id: "j2",
    company: "CloudFirst Inc",
    role: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    status: "NOT APPLIED",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
  },
  {
    id: "j3",
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    status: "NOT APPLIED",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
  },
  {
    id: "j4",
    company: "Mobile Fist Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
  },
  {
    id: "j5",
    company: "CyberShield",
    role: "Security Analyst",
    location: "Washington, DC",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    status: "NOT APPLIED",
    description: "Protect enterprise infrastructure from cyber threats. Monitor networks, conduct audits, and implement security protocols."
  },
  {
    id: "j6",
    company: "NextGen AI",
    role: "Machine Learning Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160,000 - $210,000",
    status: "NOT APPLIED",
    description: "Develop and deploy advanced ML models for predictive analytics. Experience with PyTorch or TensorFlow is essential."
  },
  {
    id: "j7",
    company: "GreenTech",
    role: "Full Stack Developer",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$115,000 - $155,000",
    status: "NOT APPLIED",
    description: "Build sustainable technology solutions for the energy sector. Work across the stack with Node.js and React."
  },
  {
    id: "j8",
    company: "FinStream",
    role: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    salary: "$145,000 - $185,000",
    status: "NOT APPLIED",
    description: "Lead product strategy for a high-growth fintech platform. Collaborate with engineering and design to deliver impact."
  }
];
let appliedArray = [];
let rejectArray = [];
function getvalue(id) {
  return Number(document.getElementById(id).innerText)
}
function setValue(id, value) {
  document.getElementById(id).innerText = value
}



function interviewSelect(id) {
  const statusBadge = document.getElementById(id)
  let x = 1;
  if (statusBadge.classList.contains("applied")) {
    return;
  }
  if (statusBadge.classList.contains("rejected")) {
    setValue("rejected-id", getvalue("rejected-id") - 1);
    statusBadge.classList.remove("rejected")
    x = 0;
  }

  for (let job of jobs) {
    if (job.id === id) {
      job.status = "APPLIED"
      appliedArray.push(job)
      rejectArray = rejectArray.filter(job => job.id !== id)
    }
  }


  statusBadge.classList.add("applied")
  statusBadge.innerHTML = `
  <div 
    class="px-3 py-2 
    font-medium w-28 h-9 flex justify-center items-center
    border-[#10b981] bg-[#10b981] text-[#eef4ff] ">
    APPLIED
  </div> `

  setValue("interview-id", appliedArray.length)
  

  renderAll(appliedArray, "yes-jobs")
  renderAll(rejectArray, "yes-reject")
  
  const allBtn = document.getElementById("all-btn");
  console.log(rejectArray.length ,allBtn.classList.contains("btn-primary"))
  if (rejectArray.length === 0 &&!allBtn.classList.contains("btn-primary")) {
    document.getElementById("not-available-sec").classList.remove("hidden")
  }

}

function rejectJob(id) {
  const statusBadge = document.getElementById(id)
  let x = 1;
  if (statusBadge.classList.contains("rejected")) {
    return;
  }
  if (statusBadge.classList.contains("applied")) {

    setValue("interview-id", getvalue("interview-id") - 1);
    statusBadge.classList.remove("applied")
    x = 0;
  }
  for (let job of jobs) {
    if (job.id === id) {
      job.status = "REJECTED"
      rejectArray.push(job);
      appliedArray = appliedArray.filter(job => job.id !== id)
    }
  }
  statusBadge.classList.add("rejected")
  statusBadge.innerHTML =
    `
    <div 
    class="px-3 py-2 
    font-medium w-28 h-9 flex justify-center items-center
    border-[#ef4444] bg-[#ef4444] text-[#eef4ff] ">
    REJECT
    </div>
  `

  setValue("rejected-id", rejectArray.length)



  renderAll(appliedArray, "yes-jobs")
  renderAll(rejectArray, "yes-reject")
  const allBtn = document.getElementById("all-btn");
  
  if (appliedArray.length === 0 &&!allBtn.classList.contains("btn-primary")) {
    document.getElementById("not-available-sec").classList.remove("hidden")
  }
}

function deleteJob(id) {

  jobs = jobs.filter(job => job.id !== id);
  appliedArray = appliedArray.filter(job => job.id !== id);
  rejectArray = rejectArray.filter(job => job.id !== id);
  console.log(jobs)
  setValue("num-jobs", jobs.length);
  setValue("total-job", jobs.length);
  renderAll(jobs, "render-main");
  renderAll(appliedArray, "yes-jobs")
  setValue("interview-id", appliedArray.length)

  renderAll(rejectArray, "yes-reject")
  setValue("rejected-id", rejectArray.length)

}

function renderAll(jobs, placetoRender) {
  const HTML = document.getElementById(placetoRender);
  let mainHTML = ""
  for (let job of jobs) {
    mainHTML += `
          <div class="card w-full bg-base-100 card-xs shadow-sm p-3 ">
          <div class="card-body">
              <div class="flex justify-between items-center ">
                  <div>
                      <h2 class="text-[18px] text-[#002c5c] font-semibold">${job.company}</h2>
                      <p class="text-[16px] text-[#64748b]">${job.role}</p>
                  </div>
                  ${placetoRender !== "yes-jobs" && placetoRender !== "yes-reject" ? `<div>
                      <button onclick="deleteJob('${job.id}')" class="btn border border-[#f1f2f4] rounded-full px-[10px] py-[9px]  "><i
                              class="fa-regular fa-trash-can text-[#64748b]"></i></button>
                  </div>`: ""
      }                 
              </div>

              <p class="text-[14px] text-[#64748b] mt-[20px]">${job.location} • ${job.type} • ${job.salary}</p>
<div id='${job.id}'>
              ${placetoRender === "render-main" ?
        `                   
                  <div 
                        class="px-3 py-2 bg-[#eef4ff] text-[#002c5c] font-medium w-28 h-9 flex justify-center items-center">
                        NOT APPLIED
                  </div>
                `
        : placetoRender === "yes-jobs" ?
          `
                <div 
                  class="px-3 py-2 
                  font-medium w-28 h-9 flex justify-center items-center
                  border-[#10b981] bg-[#10b981] text-[#eef4ff] ">
                  APPLIED
                </div>
                `
          : placetoRender === "yes-reject" ?
            `
                  <div 
                    class="px-3 py-2 
                    font-medium w-28 h-9 flex justify-center items-center
                    border-[#ef4444] bg-[#ef4444] text-[#eef4ff] ">
                    REJECT
                  </div>
                `: ``
      }
</div>
              <p class="text-[#323b49] text-[14px]">${job.description}</p>
              <div class="flex gap-[10px]">
                  <button onclick="interviewSelect('${job.id}')"
                      class="btn text-[14px] font-semibold text-[#10b981] border-[2px] border-[#10b981] hover:bg-[#10b981] hover:text-[#eef4ff]">INTERVIEW</button>
                  <button onclick="rejectJob('${job.id}')"
                      class="btn btn text-[14px] font-semibold text-[#ef4444] border-[2px] border-[#ef4444] hover:bg-[#ef4444] hover:text-[#eef4ff]">REJECTED</button>
              </div>
          </div>
      </div>
    `
  }
  HTML.innerHTML = mainHTML
}
renderAll(jobs, "render-main");

