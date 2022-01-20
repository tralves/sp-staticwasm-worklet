# sp-staticwasm-worklet
Superpowered static wasm with audio worklet example

A simple project that creates a custom WASM lib that uses [Superpowered](https://github.com/superpoweredSDK/web-audio-javascript-webassembly-SDK-interactive-audio).

It includes the following tests:

1. loopback in wasm (`std::memcpy` the `input` to `output`);
2. loopback in wasm and add SP reverb;
3. playing an .mp3 sample with `Superpowered::AdvancedAudioPlayer`;
4. a simple white noise (just throwing random numbers in the output);
5. White noise with `Superpowered::Generator`;
6. Generating a sound with `Superpowered::Generator`;

The result is that every test that uses Superpowered (2, 3, 5, and 6) cause some noise. 😤😤😤😤😤

## Running this example project:

1. clone this repo;

2. (optional) `./build.sh`

3. serve `public_html` (e.g. `cd public_html && http-server`)
