const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
const allJobList = document.getElementById("all-job-list")
const interviewSec = document.getElementById("interview-sec")
const rejectSec = document.getElementById("reject-sec")
// Full list
allBtn.addEventListener("click", function () {

  interviewBtn.classList.remove("btn-primary")
  rejectedBtn.classList.remove("btn-primary")
  allBtn.classList.add("btn-primary")

  interviewSec.classList.add("hidden")
  rejectSec.classList.add("hidden")
  allJobList.classList.remove("hidden")

})

// interview list

interviewBtn.addEventListener("click", function () {
  interviewBtn.classList.add("btn-primary")
  rejectedBtn.classList.remove("btn-primary")
  allBtn.classList.remove("btn-primary")

  interviewSec.classList.remove("hidden")
  rejectSec.classList.add("hidden")
  allJobList.classList.add("hidden")
})
// reject list
rejectedBtn.addEventListener("click", function () {
  interviewBtn.classList.remove("btn-primary")
  rejectedBtn.classList.add("btn-primary")
  allBtn.classList.remove("btn-primary")

  interviewSec.classList.add("hidden")
  rejectSec.classList.remove("hidden")
  allJobList.classList.add("hidden")
})