// $('#btn_02').hover(() => {
//   $('#btn_02').html("<a href='about.html'><img src='images/btn_02-1.png' alt='' id='btn_02-1'></a>");
// }, () => {
//   $('#btn_02').html("<img src='images/btn_02.png' alt='' id='btn_02'>");
// });

const targetImg = document.querySelector("#img")

$('#btn_02').on("mouseover", () => {
  // console.log("mouse over");
  // $('#btn_02').html("<a href='about.html'><img src='images/btn_02-1.png' alt=''></a>");
  targetImg.src = 'images/btn_02-1.png';
});
$('#btn_02').on("mouseleave", () => {
  // console.log("mouse leave");
  // $('#btn_02').html("<a href='about.html'><img src='images/btn_02.png' alt=''></a>");
  targetImg.src = 'images/btn_02.png';
});