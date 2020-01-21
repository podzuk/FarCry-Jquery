function show_inform() {
  $(".main_block__content_buy").show();
  $(".main_block__content_rating").hide();
  $(".main_block__content_inform").hide();
  $(".main_block__item1").addClass("id1");
  $(".main_block__item1").removeClass("id2");
  $(".main_block__item1").removeClass("id3");
}
function show_rating() {
  $(".main_block__content_rating").show();
  $(".main_block__content_inform").hide();
  $(".main_block__content_buy").hide();
  $(".main_block__item1").addClass("id2");
  $(".main_block__item1").removeClass("id1");
  $(".main_block__item1").removeClass("id3");
}
function show_main() {
  $(".main_block__content_inform").show();
  $(".main_block__content_buy").hide();
  $(".main_block__content_rating").hide();
  $(".main_block__item1").addClass("id3");
  $(".main_block__item1").removeClass("id2");
  $(".main_block__item1").removeClass("id1");
}
