const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
const allJobList = document.getElementById("all-job-list")

const notAviableSec = document.getElementById("not-available-sec")

const yesJob = document.getElementById("yes-jobs")

const yesReject = document.getElementById("yes-reject")

// Full list
allBtn.addEventListener("click", function () {

  interviewBtn.classList.remove("btn-primary")
  rejectedBtn.classList.remove("btn-primary")
  allBtn.classList.add("btn-primary")


  notAviableSec.classList.add("hidden")

  yesJob.classList.add("hidden")
  yesReject.classList.add("hidden")

  allJobList.classList.remove("hidden")

})

// interview list

interviewBtn.addEventListener("click", function () {
  interviewBtn.classList.add("btn-primary")
  rejectedBtn.classList.remove("btn-primary")
  allBtn.classList.remove("btn-primary")

  

  if (appliedArray.length > 0) {

    yesJob.classList.remove("hidden")
    notAviableSec.classList.add("hidden");
  } else {
    yesJob.classList.add("hidden")
    notAviableSec.classList.remove("hidden");
    console.log("here")
  }
  
  yesReject.classList.add("hidden")
  allJobList.classList.add("hidden")
})

// reject list
rejectedBtn.addEventListener("click", function () {
  interviewBtn.classList.remove("btn-primary")
  rejectedBtn.classList.add("btn-primary")
  allBtn.classList.remove("btn-primary")

  
  if (rejectArray.length > 0) {
    yesReject.classList.remove("hidden")
    notAviableSec.classList.add("hidden");
  } else {
    yesReject.classList.add("hidden")
    notAviableSec.classList.remove("hidden");
  }

  yesJob.classList.add("hidden")
  allJobList.classList.add("hidden")
})
