#include "Superpowered.h"
#include "SuperpoweredSimple.h"
#include "SuperpoweredWhoosh.h"
#include "SuperpoweredReverb.h"
#include "SuperpoweredAdvancedAudioPlayer.h"
#include "SuperpoweredGenerator.h"
#include <cstdlib>
#include <cstring>
#include <emscripten.h>
// #include <emscripten/bind.h>

static Superpowered::Reverb *reverb = NULL;
static unsigned int playersCount = 100;
static Superpowered::AdvancedAudioPlayer *players[100];
static Superpowered::Generator *noiseGenerator;
static Superpowered::Generator *soundGenerator;
static int memLength = 0;
static int memOffset = 0;
unsigned int samplerate = 44100;

EMSCRIPTEN_KEEPALIVE unsigned int initialize(unsigned int _samplerate) {
    samplerate = _samplerate;
    Superpowered::Initialize("ExampleLicenseKey-WillExpire-OnNextUpdate", false, false, false, true, true, false, false);
    
    reverb = new Superpowered::Reverb((unsigned int)samplerate);
    reverb->enabled = true;
    // reverb->mix = 0.8;
    reverb->predelayMs = 100;

    noiseGenerator = new Superpowered::Generator(samplerate, Superpowered::Generator::WhiteNoise);
    soundGenerator = new Superpowered::Generator(samplerate, Superpowered::Generator::Sine);
    soundGenerator->samplerate = 440;
    soundGenerator->frequency = 1;
    return Superpowered::Version();
}

EMSCRIPTEN_KEEPALIVE void processFeedback(float* input, float *output, int buffersize) {
    std::memcpy(output, input, buffersize * sizeof(float));
}

EMSCRIPTEN_KEEPALIVE void processReverb(float* input, float *output, int buffersize) {
    std::memcpy(output, input, buffersize * sizeof(float));
    if (reverb != NULL) {
        reverb->process(output, output, (unsigned int)buffersize / 2);
    }
}

EMSCRIPTEN_KEEPALIVE void processSample(float* input, float *output, int buffersize) {
    bool playing = false;

    if (players[0]->processStereo(output, playing, buffersize / 2)) playing = true;

    if (!playing) {
        for (int i = 0; i < buffersize; i++)
        {
            output[i] = 0;
        }
    }
}

EMSCRIPTEN_KEEPALIVE void processWhiteNoiseSP(float* input, float *output, int buffersize) {
    noiseGenerator->generate(output, buffersize / 2);
}

EMSCRIPTEN_KEEPALIVE void processWhiteNoise(float* input, float *output, int buffersize) {
    float LO = -1.0f;
    float HI = 1.0f;

    for (int i = 0; i < buffersize; i++)
    {
        output[i] = LO + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/(HI-LO)));    
    }
    
}

EMSCRIPTEN_KEEPALIVE void processSound(float* input, float *output, int buffersize) {
    soundGenerator->generate(output, buffersize / 2);
}


EMSCRIPTEN_KEEPALIVE int setSamples(
    char* sample_A2, unsigned int sample_A2_length, 
    char* sample_gong_1, unsigned int sample_gong_1_length, 
    char* sample_hiHat_sample, unsigned int sample_hiHat_sample_length) {

    void* audioInMemory01 = Superpowered::Decoder::decodeToAudioInMemory(sample_gong_1, sample_gong_1_length);
    printf("length %d\n",sample_gong_1_length);
    printf("audioInMemory %d\n",Superpowered::AudioInMemory::getSize(audioInMemory01));
    printf("samplerate %d\n",Superpowered::AudioInMemory::getSamplerate(audioInMemory01));

    players[0] = new Superpowered::AdvancedAudioPlayer(samplerate, 0);
    players[0]->openMemory(audioInMemory01, false, false);
    players[0]->loopOnEOF = true;
    players[0]->timeStretching = false;
    players[0]->play();

    // --- test whether it is decoding something ---
    // float* tempOutput = (float *)malloc(256 * sizeof(float));
    // int offset = 10;
    // for (int i = 0; i < offset; i++)
    // {
    //     players[0]->processStereo(tempOutput, false, 256);
    // }
    // printf("process  %d: %f \n",0,tempOutput[0]);
    
    return 1;
}

EMSCRIPTEN_KEEPALIVE float randomNoise() {
    float LO = -1.0f;
    float HI = 1.0f;

    return LO + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/(HI-LO)));
};

