
// asynchronous way to load video for faster result hopefully
const buildVid = async () => {
    // uses jquery to add video to html
    const video = await $('.videoplace').append('<iframe width="560" height="350" src="https://www.youtube.com/embed/3WIJ4axzFlU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
};
    
// uses buildVid and catches errors
const getVideo = async () => {
    try {
        await buildVid()
    } catch (error) {
        alert('Couldn\'t load youtube video');
        console.log('OOOPS');
        console.log('\t', error);
    }
}

// call the function
getVideo();
