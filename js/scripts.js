 $(document).ready(function() {
    $('#new-landmark').click(function() {
        $('new-landmarks').append("<div class='new-landmark'>" +
                                '<div class="form-group">' +
                                        '<label for="new-landmark-name">Landmark name:</label>' +
                                        '<input type="text" class="form-control new-landmark-name">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        '<label for="new-landmark-city">Landmark City:</label>' +
                                        '<input type="text" class="form-control new-landmark-city">' +
                                    '</div>' +
                                    '<div class="form-group">' +
                                        '<label for="new-landmark-location">Landmark Location:</label>' +
                                        '<input type="text" class="form-control new-landmark-location">' +
                                    '</div>' +
                                '</div>');
    });

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
        })

    });
 });
