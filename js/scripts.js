 $(document).ready(function() {

    // When new landmark is clicked, add a new landmark form again
    $('#new-landmark').click(function() {
        $('#new-landmarks').append("<div class='new-landmark'>" +
                                '<div class="form-group">' +
                                        '<label for="new-landmark-name">Landmark Name</label>' +
                                        '<input type="text" class="form-control new-landmark-name">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        '<label for="new-landmark-type">Landmark Type</label>' +
                                        '<input type="text" class="form-control new-landmark-type">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        '<label for="new-landmark-location">Landmark Location</label>' +
                                        '<input type="text" class="form-control new-landmark-location">' +
                                    '</div>' +
                                '</div>');
    });


    // Do everything in here when the new place form is submitted
    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputtedName = $('input#new-name').val();
        var inputtedLocation = $('input#new-location').val();
        var inputtedDate = $('input#new-date').val();
        var inputtedNotes = $('input#new-notes').val();

        var newPlace = {
            name: inputtedName,
            location: inputtedLocation,
            date: inputtedDate,
            notes: inputtedNotes,
            landmarks: []
        };

        // Get the input data for any new landmark
        $(".new-landmark").each(function() {
            var inputtedLandmarkName = $(this).find("input.new-landmark-name").val();
            var inputtedLandmarkType = $(this).find("input.new-landmark-type").val();
            var inputtedLandmarkLocation = $(this).find("input.new-landmark-location").val();

            var newLandmark = {
                name: inputtedLandmarkName,
                type: inputtedLandmarkType,
                location: inputtedLandmarkLocation
            };

            newPlace.landmarks.push(newLandmark);
        });

        // Add this place to the places list with a name
        $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");

        // Display a clicked place
        $(".place").last().click(function() {
            $("#show-place").show();
            $("show-place h2").text(newPlace.name);

            $(".location").text(newPlace.location);
            $(".date").text(newPlace.date);
            $(".notes").text(newPlace.notes);

            // Clear landmarks list for this place
            $("ul#landmark").text("");

            newPlace.landmarks.forEach(function(landmark) {
                $("ul#landmark").append("<li>" + landmark.name + ", " + landmark.type + ", " + landmark.location + "</li>");
            });

        });


        // Reset all form values so that the user can add new data
        $("input#new-name").val("");
        $("input#new-location").val("");
        $("input#new-date").val("");
        $("input#new-notes").val("");
        $("input.new-landmark-name").val("");
        $("input.new-landmark-type").val("");
        $("input.new-landmark-location").val("");
    });
 });
