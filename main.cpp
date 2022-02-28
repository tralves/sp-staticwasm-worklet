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
static unsigned int playersCount = 20;
static Superpowered::AdvancedAudioPlayer *players[100];
static Superpowered::Generator *noiseGenerator;
static Superpowered::Generator *soundGenerator;
static int memLength = 0;
static int memOffset = 0;
static int processCount = 0;
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

EMSCRIPTEN_KEEPALIVE void processSamplePerformance(float* input, float *output, int buffersize) {
    
    bool playing = false;

    for (unsigned int i = 0; i < playersCount; i++) {
        if (players[i]->processStereo(output, playing, buffersize/2)) playing = true;
    }
    if (!playing) {
         
        for (int i = 0; i < buffersize; i++)
        {
            output[i] = 0;
        }
    }
}

EMSCRIPTEN_KEEPALIVE void processWhiteNoiseSP(float* input, float *output, int buffersize) {
    noiseGenerator->generate(output, buffersize);
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
    soundGenerator->generate(output, buffersize);
}


EMSCRIPTEN_KEEPALIVE int setSamples(
    char* sample_A2, unsigned int sample_A2_length, 
    char* sample_gong_1, unsigned int sample_gong_1_length, 
    char* sample_hiHat_sample, unsigned int sample_hiHat_sample_length) {

    void* audioInMemory_sample_gong_1 = Superpowered::Decoder::decodeToAudioInMemory(sample_gong_1, sample_gong_1_length);
    void* audioInMemory_sample_A2 = Superpowered::Decoder::decodeToAudioInMemory(sample_A2, sample_A2_length);
    void* audioInMemory_sample_hiHat_sample = Superpowered::Decoder::decodeToAudioInMemory(sample_hiHat_sample, sample_hiHat_sample_length);
    printf("length %d\n",sample_gong_1_length);
    printf("audioInMemory %d\n",Superpowered::AudioInMemory::getSize(audioInMemory_sample_gong_1));
    printf("samplerate %d\n",Superpowered::AudioInMemory::getSamplerate(audioInMemory_sample_gong_1));

    for (unsigned int i = 0; i < playersCount / 2; i++) {
        // void* audioInMemory_sample_A2 = Superpowered::Decoder::decodeToAudioInMemory(sample_A2, sample_A2_length);
        players[i] = new Superpowered::AdvancedAudioPlayer(samplerate, 0);
        players[i]->openMemory(audioInMemory_sample_A2, false, false);
        players[i]->loopOnEOF = true;
        players[i]->pitchShiftCents = (i - 12) * 100;
        players[i]->playSynchronizedToPosition((i % 12) * -250.0f);
        printf("created player %d\n",i);
    }

    for (unsigned int i = playersCount / 2; i < playersCount; i++) {
        // void* audioInMemory_sample_hiHat_sample = Superpowered::Decoder::decodeToAudioInMemory(sample_hiHat_sample, sample_hiHat_sample_length);
        players[i] = new Superpowered::AdvancedAudioPlayer(samplerate, 0);
        players[i]->openMemory(audioInMemory_sample_gong_1, false, false);
        players[i]->loopOnEOF = true;
        players[i]->playSynchronizedToPosition((i % (playersCount / 2)) * -500.0f);
        printf("created player %d\n",i);
    }
    
    return 1;
}

EMSCRIPTEN_KEEPALIVE float randomNoise() {
    float LO = -1.0f;
    float HI = 1.0f;

    return LO + static_cast <float> (rand()) /( static_cast <float> (RAND_MAX/(HI-LO)));
};

