        $(document).ready(function () {
            $('#copyLink').click(function (e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Get the current URL and remove query params or hash
                var shortenedURL = window.location.origin + window.location.pathname;
                
                // Create a temporary input element to copy the shortened URL to clipboard
                var tempInput = jQuery('<input>');
                $('body').append(tempInput);
                tempInput.val(shortenedURL).select();
                document.execCommand("copy");
                tempInput.remove(); // Clean up
                
                alert("URL copied!");
            });
        });
        
        
        
        $(document).ready(function() {
            // Fetch the JSON data from the external file
            $.getJSON('search_index.json', function(data) {

                // Function to shuffle the array
                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                    return array;
                }

                // Select 20 random links
                const randomLinks = shuffleArray(data).slice(0, 20);

                // Create the marquee content
                let marqueeContent = '';
                randomLinks.forEach(link => {
                    marqueeContent += `<a href="${link.permalink}" title="${link.snippet}">${link.title}</a>`;
                });

                // Duplicate the content to make it seamless
                marqueeContent += marqueeContent;

                // Inject marquee content into the container
                $('#marquee-content').html(marqueeContent);
            });
        });