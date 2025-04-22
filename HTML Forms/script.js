// Add JavaScript code for your web site here and call it from index.html.
const form = document.getElementById('songRequests');

const printSong = (event) => {
    // Get the name of the requester
    let name = document.getElementById('name').value;

    // Get the song of the requester
    let song = document.getElementById('song').value;

    // Get the artist of the requester
    let artist = document.getElementById('artist').value;

    // Print the artist
    console.log(name + " " + song + " " + artist);

    // Prevent default behavior
    event.preventDefault();
}

form.addEventListener('submit', printSong);
