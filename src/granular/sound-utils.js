export const downloadSound = (url) => {
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      const blob = xhr.response;
      console.log(blob);
      const buffer = loadSound(blob);

      // I should probably convert this function to fetch


        //this stuff still needs to happen;
    //   buffers, soundFileData, soundFileDatas, numBuffers
    //   buffers[numBuffers] = b;
    //   console.log(buffers[numBuffers]);
    //   console.log(b);
    //   soundFileData = buffers[numBuffers].getChannelData(0);
    //   soundFileDatas.push(soundFileData)
    //   numBuffers++
    //   console.log(buffers);
    };
    xhr.open('GET', url);
    xhr.send();
}

export const loadSound = (blob) => {

    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.addEventListener('load', (e) => {
        const array = reader.result;
        context.decodeAudioData(array, (b) => {

            const buffer = b;
            return buffer

        },function(){
            console.log('loading failed');
            alert('loading failed');
        });
    })  
    
}
