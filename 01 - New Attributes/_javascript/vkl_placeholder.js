function makePlaceholders() {
    // collect all input elements of text, email, tel, and url type
    $inputs = $("input[type=text],input[type=email],input[type=tel],input[type=url]");

    // for each element...
    $inputs.each(
        // run an annonymous function
        function () {
            // grab the element in a variable
            var $this = jQuery(this);
            // check if there is an attribute 'placeholder' and grab its value
            this.placeholderVal = $this.attr("placeholder");
            // set the input value to this attribute value
            $this.val(this.placeholderVal);
        }
    )

    // when an element gets the focus...
    .bind("focus", function () {
        // grab the element in a variable
        var $this = jQuery(this);
        // grab the value of the element
        var val = $.trim($this.val());
        // if the value is not the placeholder, or the element is empty
        if (val == this.placeholderVal || val == "") {
            // set the value to empty (remove the placeholder)
            $this.val("");
        }
    })

    // when an element is released of focus...
    .bind("blur", function () {
        // grab the element in a variable
        var $this = jQuery(this);
        // grab the value of the element
        var val = $.trim($this.val());
        // if the value is not the placeholder, or the element is empty
        if (val == this.placeholderVal || val == "") {
            // set the value to the placeholder
            $this.val(this.placeholderVal);
        }
    });
}
