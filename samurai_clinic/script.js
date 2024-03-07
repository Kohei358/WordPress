// $('#btn_02').hover(() => {
//   $('#btn_02').html("<a href='about.html'><img src='images/btn_02-1.png' alt='' id='btn_02-1'></a>");
// }, () => {
//   $('#btn_02').html("<img src='images/btn_02.png' alt='' id='btn_02'>");
// });

$('#btn_02').on("mouseover", () => {
  $('#btn_02').html("<a href='about.html'><img src='images/btn_02-1.png' alt='' id='btn_02-1'></a>");
});
$('#btn_02-1').on("mouseleave", () => {
  $('#btn_02').html("<img src='images/btn_02.png' alt='' id='btn_02'>");
});