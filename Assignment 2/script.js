const previewImage = document.getElementById("previewImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(function(thumbnail) {

    thumbnail.addEventListener("click", function() {

        previewImage.src = this.src;

        thumbnails.forEach(function(img) {
            img.classList.remove("active");
        });

        this.classList.add("active");
    });

});
