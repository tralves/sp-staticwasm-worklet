let audioContext;
let spworklet;

async function createSPAudioNode(mode) {
    if (!audioContext) {
        audioContext = new AudioContext({
            sampleRate: 44100
        })
        await audioContext.audioWorklet.addModule('sp-worklet.processor.js')
        spworklet = new AudioWorkletNode(audioContext, 'sp-processor', {
            'processorOptions': {
                'mode': mode,
                'samplerate': audioContext.sampleRate
            },
            'outputChannelCount': [2]
        })
        spworklet.connect(audioContext.destination)
    }
    audioContext.suspend();
}

async function testFeedback() {
    await createSPAudioNode('feedback');
    const inputStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    const source = audioContext.createMediaStreamSource(inputStream);
    source.connect(spworklet);
    spworklet.connect(audioContext.destination)
    initialized();
    window.document.getElementById('output').textContent = "Produces FEEDBACK, so USE A HEADSET!";
}

async function testReverb() {
    await createSPAudioNode('reverb');
    const inputStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    const source = audioContext.createMediaStreamSource(inputStream);
    source.connect(spworklet);
    spworklet.connect(audioContext.destination)
    initialized();
    window.document.getElementById('output').textContent = "Produces FEEDBACK, so USE A HEADSET!";
}

async function testSample() {
    await createSPAudioNode('sample');
    spworklet.port.onmessage = async message => {
        console.log('MAIN:', message.data);
        switch (message.data.type) {
            case 'ready':
                const samples = await loadSamples();
                spworklet.port.postMessage({type: 'setSamples', samples});
                initialized();
                break;
        
            default:
                break;
        }
    };
}

async function testWhiteNoise() {
    await createSPAudioNode('pink-noise');
    initialized();
}
async function testWhiteNoiseSP() {
    await createSPAudioNode('pink-noise-sp');
    initialized();
}

async function testSound() {
    await createSPAudioNode('sound');
    initialized();
}

async function initialized() {
    window.document.getElementById('test-feedback').style.display = 'none';
    window.document.getElementById('test-reverb').style.display = 'none';
    window.document.getElementById('test-sample').style.display = 'none';
    window.document.getElementById('test-whitenoise').style.display = 'none';
    window.document.getElementById('test-whitenoisesp').style.display = 'none';
    window.document.getElementById('test-sound').style.display = 'none';
    window.document.getElementById('start').style.display = 'inline-block';
    window.document.getElementById('stop').style.display = 'inline-block';
}

async function start() {
    audioContext.resume();
}

async function stop() { 
    audioContext.suspend()
}

async function loadSamples() {

    const samples = {};
    samples.A2 = await loadUrl('./A2.mp3');
    samples.gong_1 = await loadUrl('./gong_1.mp3');
    samples.hiHat_sample = await loadUrl('./hiHat_sample.mp3');

    return samples;

    async function loadUrl(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`could not load url: ${url}`);
      }
      return await response.arrayBuffer();
    }
  }

// async fetch(url) {
//     let obj = new SuperpoweredGlue();
//     await fetch(url)
//       .then((response) => response.arrayBuffer())
//       .then((bytes) => obj.loadFromArrayBuffer(bytes));
//     return obj;
//   }

window.sp = {
    testSound,
    testWhiteNoise,
    testWhiteNoiseSP,
    testFeedback,
    testReverb,
    testSample,
    start,
    stop
};
