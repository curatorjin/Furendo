$(function () {
    generate_toc();
});

function generate_toc() {
    let titles = $('.content').children('h1,h2,h3,h4,h5,h6')
    for (let i = 0; i < titles.length; i++) {
        const heading = titles[i]
        const headingLevel = heading.tagName.toLowerCase();
        const $heading = $(heading);
        const headingName = $heading.text().trim();
        const headingId = $heading.attr("id");
        $('#menu').append(`<div><label class="menu-index-${headingLevel} radio"><input type="radio" name="content-title" index="${headingId}"><a href="#${headingId}">${headingName}</a></label></div>`);
    }
}

$(window).scroll(function (event) {
    let headings = $('.content').children('h1,h2,h3,h4,h5,h6')
    for (let i = 0; i < headings.length; i++) {
        const heading = headings[i]
        const $heading = $(heading);
        if ($heading.offset().top - $(document).scrollTop() > 20) {
            break;
        }
        const anchorName = $heading.attr('id');
        const $catalog = $(`input[index="${anchorName}"]`);
        $catalog.prop("checked", true);
    }
});
