size = 16;
color = "#999";

$(document).ready(function() {
    makeGrid();

    $('.clear').click(function() {
        clear();
    });
});

function makeGrid() {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            $('.canvas').append('<div class="pixel"></div>');
        }
    }

    $('.pixel').css({
        "background-color": "#FFF",
        "height": $('.canvas').height() / size,
        "width": $('.canvas').width() / size
    });

    $('.pixel').hover(function() {
        $(this).css({
            "background-color": color
        });
    });
}

function deleteGrid() {
  for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
          $('.pixel').remove();
      }
  }
}

function clear() {
    tempSize = prompt("How many pixels wide do you want the new grid to be?");
    if( tempSize == null ) {
      return;
    } else {
      size = tempSize;
    }
    deleteGrid();
    makeGrid();
}
